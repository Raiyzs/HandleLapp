import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-list-detail-page',
  templateUrl: 'list-detail-page.html'
})
export class ListDetailPage {
 
  title;
  description;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('list').title;
    this.description = this.navParams.get('list').description;
  }
 
}