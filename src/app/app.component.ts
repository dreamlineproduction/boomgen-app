import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // let uid = localStorage.getItem('user_id');
      // if(uid == null || uid == ""){
      //   this.navCtrl.navigateForward('login');
      // }else{
      //   this.navCtrl.navigateForward('available');
      // }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openMyAccount(){
    this.navCtrl.navigateForward('account');
  }

  openMyCoupons(){
    this.navCtrl.navigateForward('redeemedcoupons');
  }
}
