import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { AddListPage } from '../pages/add-list-page/add-list-page';
import { ListDetailPage } from '../pages/list-detail-page/list-detail-page';
import { AddItemPage } from '../pages/add-item-page/add-item-page';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    AddListPage,
    ListDetailPage,
    AddItemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    AddListPage,
    ListDetailPage,
    AddItemPage
  ],
  providers: [Storage, Data, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
