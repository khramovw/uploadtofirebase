import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

// Models
import { Item } from "../models/item";


@Injectable()
export class ItemService {

  itemCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;
  item: Observable<Item>;

  constructor( private afs: AngularFirestore) {
    this.itemCollection = afs.collection('items');
  }

  getItems(): Observable<Item[]> {
    this.items = this.itemCollection.snapshotChanges().map( item => {
      return item.map( action => {
        const data = action.payload.doc.data() as Item;
        data.id = action.payload.doc.id;
        return data;
      })
    });
    return this.items
  }

}
