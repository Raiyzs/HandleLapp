import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item-page/add-item-page'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController ) {
    
  }
 
  ionViewDidLoad(){
  
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
    // call back when modal dismissed
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });
    addModal.present();
    
  }
 
  viewItem(item){
  this.navCtrl.push(itemDetailPage,{
  item: item
  });
  }

  saveItem(item){
    this.items.push(item);
  }
 
}