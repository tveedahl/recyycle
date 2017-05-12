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
    setTimeout(this.navToSignup(), 50000);
}

  navToSignup(){
    this.navCtrl.push(Signup);
  }
}
