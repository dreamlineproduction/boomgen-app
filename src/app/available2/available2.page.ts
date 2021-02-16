import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-available2',
  templateUrl: './available2.page.html',
  styleUrls: ['./available2.page.scss'],
})
export class Available2Page implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  oniconClick(){
    this.router.navigate(['/account'])
  }
  onbackClick(){
    console.log("click");
    this.navCtrl.navigateForward('/coupon');
    }
}
