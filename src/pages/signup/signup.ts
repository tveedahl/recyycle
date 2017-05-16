import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import firebase from 'firebase';

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
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      password: ['']
    });
  }

  ionViewDidLoad() {
  }

  signupUser() {
    //console.log(this.signupForm.value);
    firebase.auth(alertCtrl).createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      if (errorCode == 'auth/invalid-email') {
        let alert = this.alertCtrl.create({
          //title: 'Signup Error',
          subTitle: errorMessage,
          buttons: ['OK']
        });
        alert.present();
      } else {
        alert.present();
      }
      console.log(error);
    });
  }
}