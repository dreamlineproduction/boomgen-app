import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {

  constructor(public navCtrl: NavController) { 
    let uid = localStorage.getItem('user_id');
    if(uid == null || uid == ""){
      this.navCtrl.navigateForward('login');
    }else{
      this.navCtrl.navigateForward('available');
    }
  }

  ngOnInit() {
  }

}
