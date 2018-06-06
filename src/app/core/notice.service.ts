import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  postsCollection: AngularFirestoreCollection<any>;
  postDocument:   AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', (ref) => ref.orderBy('time', 'desc'));    
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
    return this.afs.doc<any>(`posts/${id}`);
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
