import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../pages/signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

constructor(public navCtrl: NavController) {

  }

}

$scope.$on("$ionicView.enter", function(event, data){
   alert('asswipe!');
    // handle event
   console.log("State Params: ", data.stateParams);
});

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function navToSignup () {
    wait(3000);
}