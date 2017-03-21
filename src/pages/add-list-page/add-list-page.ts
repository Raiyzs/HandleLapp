import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-list-page',
  templateUrl: 'add-list-page.html'
})
export class AddListPage {

  title;

  constructor(public navCtrl: NavController, public vc: ViewController) { }

  ionViewDidLoad() {
    console.log('Hello AddListPage Page');
  }

  saveList() {

    let newList = {

      title: this.title,

    };

    this.vc.dismiss(newList);

  }

  close() {
    this.vc.dismiss();
  }

}
