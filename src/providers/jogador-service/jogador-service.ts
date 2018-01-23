import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class JogadorService {

  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
    let path = '/jogador/' + this.angularFireAuth.auth.currentUser.uid;
    this.items = db.list(path, {
      query: {
        orderByChild: 'name'
        //, equalTo: 'A' para fazer query com valor igual a "A"
      }
    });
  }

  public getAll() {
    return this.items;
  }

  public save(item: any) {
    if (item.$key) {
      return this.items.update(item.$key, { name: item.name });
    } else {
      return this.items.push({ name: item.name });
    }
  }

  public remove(item: any) {
    return this.items.remove(item.$key)
      .then();
  }
}