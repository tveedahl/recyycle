import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Signup } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    wait(3000);
    this.navCtrl.push(Signup);
  }
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
};
