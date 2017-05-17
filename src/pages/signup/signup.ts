import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import firebase from 'firebase';

import { Login } from '../login/login';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  private signupForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.signupForm = formBuilder.group({
      email: '',
      password: ''
    });
  }

  ionViewDidLoad() {
  }

  signupUser() {
    //console.log(this.signupForm.value);
    let invEmailAlert = this.alertCtrl.create({
      title: 'Signup Error',
      subTitle: 'The email address is badly formatted',
      buttons: ['OK']
    });
    let weakPassAlert = this.alertCtrl.create({
      title: 'Signup Error',
      subTitle: 'The password must 6 characters long or more',
      buttons: ['OK']
    });
    let emailInUseAlert = this.alertCtrl.create({
      title: 'Signup Error',
      subTitle: 'The email address is already in use by another account',
      buttons: ['OK']
    });
    firebase.auth().createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password).catch(function(error) {
      var errorCode = error['code'];
      var errorMessage = error['message'];
      console.log(error);
      if (errorCode == 'auth/invalid-email') {
        invEmailAlert.present();
      } else if (errorCode == 'auth/weak-password') {
        weakPassAlert.present();
      } else if (errorCode == 'auth/email-already-in-use') {
        emailInUseAlert.present();
      }
    });
    
  }
}
