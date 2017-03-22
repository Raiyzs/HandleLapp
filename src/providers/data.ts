import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getData(name) {
    return this.storage.get(name);
  }

  save(data, name) {
    let newData = JSON.stringify(data);
    this.storage.set(name, newData);
  }


}