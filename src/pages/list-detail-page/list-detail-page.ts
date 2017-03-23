import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ModalController, NavController, reorderArray, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item-page/add-item-page'


@Component({
  selector: 'page-list-detail-page',
  templateUrl: 'list-detail-page.html'
})
export class ListDetailPage {

  title;
  public items = [];

  constructor(public navParams: NavParams, navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, public alertCtrl: AlertController) {

    this.dataService.getData(navParams.get('list').uuid).then((vare) => {
      if (vare) {
        this.items = JSON.parse(vare);
      }
    });


  }

  ionViewDidLoad() {
    this.title = this.navParams.get('list').title;
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

  saveToStorage() {
    this.dataService.save(this.items, this.navParams.get('list').uuid);
  }

  saveItem(item) {
    this.items.push(item);
    this.saveToStorage();
  }

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
    this.saveToStorage();
  }

  deleteItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveToStorage();
    }
  }

  editItem(item) {
    let prompt = this.alertCtrl.create({
      title: 'Endre navn',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Avbryt'
        },
        {
          text: 'Lagre',
          handler: data => {
            let index = this.items.indexOf(item);

            if (index > -1) {
              this.items[index] = data;
              this.saveToStorage();
            }
          }
        }
      ]
    });
    prompt.present();
  }

}