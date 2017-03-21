import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ModalController, NavController, reorderArray } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item-page/add-item-page'


@Component({
  selector: 'page-list-detail-page',
  templateUrl: 'list-detail-page.html'
})
export class ListDetailPage {

  title;
  description;
  public items = [];

  constructor(public navParams: NavParams, navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('list').title;
    this.description = this.navParams.get('list').description;
  }

  addItem() {

    let addModal = this.modalCtrl.create(AddItemPage);
    // call back when modal dismissed
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();

  }

    saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

    reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
  }

    deleteItem(item){
    let index = this.items.indexOf(item);
    if(index > -1){
      this.items.splice(index, 1);
    }
  }

}