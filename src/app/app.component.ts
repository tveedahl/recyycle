import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyBA6CkEGbNypcYGtcQiSgF0X0KI-0QfTqs",
      authDomain: "recyycle-1043d.firebaseapp.com",
      databaseURL: "https://recyycle-1043d.firebaseio.com",
      projectId: "recyycle-1043d",
      storageBucket: "recyycle-1043d.appspot.com",
      messagingSenderId: "949551356061"
    });
  }
}

