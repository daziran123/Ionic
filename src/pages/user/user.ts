import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HeadfacePage } from '../headface/headface';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// IonicPage,
// @IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  headface:string;
  userinfo:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }


  gotoHeadface(){
    this.navCtrl.push(HeadfacePage)
  }
}
