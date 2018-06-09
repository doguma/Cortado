import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { NotifyService } from './notify.service';

import { QuerySnapshot, DocumentSnapshot } from '@firebase/firestore-types';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
  uid: string;
  email?: string | null;
  displayName?: string;
  nickName?: string;
  photoURL?: string;
  phoneNum?: string;
}


@Injectable()
export class AuthService {
  user: Observable<User | null>;
  displayyName: string;
  usersCollection: AngularFirestoreCollection<any>;
  storeDocument:   AngularFirestoreDocument<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notify: NotifyService
  ) {
    
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

    this.usersCollection = this.afs.collection('users', (ref) => ref.orderBy('nickName', 'asc'));

  }


  getData(): Observable<any[]> {
    return this.usersCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
  ////// OAuth Methods /////

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth
      .signInAnonymously()
      .then(credential => {
        return this.updateUserData(credential.user); // if using firestore
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {      
        return this.updateUserData(credential.user); // if using firestore

      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => this.notify.update('Password update email sent', 'info'))
      .catch(error => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless store',
      photoURL: user.photoURL,
      nickName: user.nickName,
      phoneNum: user.phoneNum
    };
    return userRef.set(data);
  }

  public addManOrWork(position: string){
    const currentUser = firebase.auth().currentUser;

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${currentUser.uid}`
    );

    const data: User = {
      uid: currentUser.uid,
      photoURL: position
    }; 
    return userRef.set(data); 
  }



  ManOrWork(){
    const currentUser = firebase.auth().currentUser;
    return currentUser.photoURL;
    
  }



  // getStoreContact(): Observable<any[]> {
  //   const storeCollection = this.afs.collection('store', (ref) => ref.orderBy('time', 'desc'));
    
  //   // ['added', 'modified', 'removed']
  //   return this.storeCollection.snapshotChanges().pipe(
  //     map((actions) => {
  //       return actions.map((a) => {
  //         const data = a.payload.doc.data();
  //         return { id: a.payload.doc.id, ...data };
  //       });
  //     })
  //   );
  // }

  public addExtraProfile(displayName: string, nickName: string, phoneNum: string){
    const currentUser = firebase.auth().currentUser;

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${currentUser.uid}`
    );

    const storeRef: AngularFirestoreDocument<User> = this.afs.doc(
      `store/${displayName}/users/${currentUser.uid}`
    );

    const data: User = {
      uid: currentUser.uid,
      email: currentUser.email || null,
      displayName: displayName,
      nickName: nickName,
      phoneNum: phoneNum
    }; 
    return userRef.update(data); 
  }

}
