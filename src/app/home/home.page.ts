import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { DetailsService } from '../details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items;
  subscription: Subscription;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public dservice:DetailsService) {

    // this.items = [
    //   {title: 'hi1', description: 'test1'},
    //   {title: 'hi2', description: 'test2'},
    //   {title: 'hi3', description: 'test3'}
    // ];
    this.subscription = this.dservice.getMessage().subscribe(message => { console.log(message); });
    this.items = dservice.array;
    console.log(dservice.array)
  }

  ionViewDidLoad(){
  }

  async addItem(){
    let addModal = await this.modalCtrl.create({component:AddItemPage});
    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){

  }

}
