import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {WebIntent} from '@ionic-native/web-intent';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private webIntent: WebIntent,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      if(platform.is('android')){
        let intent = this.webIntent.getIntent().then((value) => {
          console.log('intent1 OK');
          console.log(value);
        }, (reason) => {
          console.log('intent1 KO');
          console.log(reason);
        });
        let intent2 = this.webIntent.onIntent();
        console.log('intent2');
        console.log(intent2);
        let resume = platform.resume;
        resume.subscribe((event) => {
          platform.ready()
            .then(() => {
              let intent = this.webIntent.getIntent().then((value) => {
                console.log('intent1 OK resume');
                console.log(value);
              }, (reason) => {
                console.log('intent1 KO resume');
                console.log(reason);
              });
              let intent2 = this.webIntent.onIntent();
              console.log('intent2');
              console.log(intent2);
            });
        });
      }

    });

  }
}

