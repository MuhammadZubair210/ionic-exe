import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  title: string;

  constructor(public navCtrl: NavController, public view: ModalController,public dservice:DetailsService) {

  }

  ngOnInit(){}
  saveItem(){

    let newItem = {
      id:this.dservice.array.length,
      title: this.title,
      completed: false
    };
    this.dservice.sendMessage(newItem);
    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }
}
