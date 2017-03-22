import { Component } from '@angular/core';
import { ModalController, NavController, reorderArray } from 'ionic-angular';
import { AddListPage } from '../add-list-page/add-list-page'
import { ListDetailPage } from '../list-detail-page/list-detail-page';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lists = [];
  reorderBtn: any = 'reorder';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

    this.dataService.getData('handlelapp').then((handlelapp) => {
      if (handlelapp) {
        this.lists = JSON.parse(handlelapp);
      }
    });

  }

  ionViewDidLoad() {

  }

  addList() {

    let addModal = this.modalCtrl.create(AddListPage);
    // call back when modal dismissed
    addModal.onDidDismiss((list) => {
      if (list) {
        this.saveList(list);
      }
    });
    addModal.present();

  }

  saveToStorage(){
    this.dataService.save(this.lists, 'handlelapp');
  }

  viewList(list) {
    this.navCtrl.push(ListDetailPage, {
      list: list
    });
  }

  saveList(list) {
    this.lists.push(list);
    this.saveToStorage();
  }

  reorderList(indexes) {
    this.lists = reorderArray(this.lists, indexes);
    this.saveToStorage();
  }

  deleteList(list) {
    let index = this.lists.indexOf(list);
    if (index > -1) {
      this.lists.splice(index, 1);
      this.saveToStorage();
    }
  }

}
