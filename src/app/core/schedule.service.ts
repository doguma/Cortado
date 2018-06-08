import { Injectable } from '@angular/core';

import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface Schedule {
  mon1: string;
  mon2: string;
  mon3: string;
  tue1: string;
  tue2: string;
  tue3: string;
  wed1: string;
  wed2: string;
  wed3: string;
  thu1: string;
  thu2: string;
  thu3: string;
  fri1: string;
  fri2: string;
  fri3: string;
  sat1: string;
  sat2: string;
  sat3: string;
  sun1: string;
  sun2: string;
  sun3: string;
  time: any;
}

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
export class ScheduleService {
  timeCollection: AngularFirestoreCollection<any>;
  timeDocument:   AngularFirestoreDocument<any>;

  schedule: Observable<Schedule | null>;
  user: Observable<User | null>;

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

    this.timeCollection = this.afs.collection('schedule');    
    // this.timeDocument = this.afs.doc<Schedule>('schedule'); 
   }

   getData(): Observable<any[]> {
    return this.timeCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getPost(){
    return this.afs.doc<any>(`schedule/CjSNr8ll1FcS1ykSlGlS`);
  }

  createPost(mon1: string, mon2: string, mon3: string, tue1: string, tue2: string, tue3: string, wed1: string, wed2: string, wed3: string, thu1: string, thu2: string, thu3: string, fri1: string, fri2: string, fri3: string, sat1: string, sat2: string, sat3: string, sun1: string, sun2: string, sun3: string) {
    const post = {
      mon1, mon2, mon3, tue1, tue2, tue3, wed1, wed2, wed3, thu1, thu2, thu3, fri1, fri2, fri3, sat1, sat2, sat3, sun1, sun2, sun3,
      time: new Date().getTime(),
    };
    this.getPost().update(post);
  }

  updatePost(id: string, data: any) {
    return this.getPost().update(data);
  }

  deletePost(id: string) {
    return this.getPost().delete();
  }
}
