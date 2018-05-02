import { Injectable } from '@angular/core';
import { AngularFireStorage } from "angularfire2/storage";
import { AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";

// Models
import { Item } from "../models/item";

@Injectable()
export class UploadFileService {

  items: Observable<Item[]>;

  constructor( private storage: AngularFireStorage, private afs: AngularFirestore ) { }

  upFile(){

    // this.snapshot = this.task.snapshotChanges().pipe(
    //   tap(snap => {
    //     if (snap.bytesTransferred === snap.totalBytes) {
    //       // Update firestore on completion
    //       this.afs.collection('photos').add( { path, size: snap.totalBytes })
    //     }
    //   })
    // )

  }



}
