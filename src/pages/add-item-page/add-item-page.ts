import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {

  title;

  constructor(public navCtrl: NavController, public vc: ViewController) { }

  ionViewDidLoad() {
    console.log('Hello AddItemPage Page');
  }

  saveItem() {

    let newItem = {

      title: this.title,

    };

    this.vc.dismiss(newItem);

  }

  close() {
    this.vc.dismiss();
  }

}


