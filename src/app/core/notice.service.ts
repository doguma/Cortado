import { Injectable } from '@angular/core';

import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
  uid: string;
  email?: string | null;
  displayName?: string;
  nickName?: string;
  photoURL?: string;
}


@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  user: Observable<User | null>;
  postsCollection: AngularFirestoreCollection<any>;
  postDocument:   AngularFirestoreDocument<any>;

  constructor( private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    const currentUser = firebase.auth().currentUser;
    this.postsCollection = this.afs.collection(`stores/${currentUser.displayName}/posts`, (ref) => ref.orderBy('time', 'desc'));    
   }

   getData(): Observable<any[]> {
    return this.postsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getPost(id: string) {
    const currentUser = firebase.auth().currentUser;
    return this.afs.doc<any>(`stores/${currentUser.displayName}/posts/${id}`);
  }

  createPost(title: string, content: string) {
    const post = {
      title,
      content,
      time: new Date().getTime(),
    };
    return this.postsCollection.add(post);
  }

  updatePost(id: string, data: any) {
    return this.getPost(id).update(data);
  }

  deletePost(id: string) {
    return this.getPost(id).delete();
  }
}
