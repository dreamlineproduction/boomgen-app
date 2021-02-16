import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, ToastController, LoadingController} from '@ionic/angular';
import {ServiceService} from '../services/service.service';

@Component({
  selector: 'app-redeemedcoupons',
  templateUrl: './redeemedcoupons.page.html',
  styleUrls: ['./redeemedcoupons.page.scss'],
})
export class RedeemedcouponsPage implements OnInit {
  uid:any;
  couponlist:any = [];
  constructor(private router: Router, public navCtrl: NavController, public server: ServiceService, public toastController: ToastController, public loadingController: LoadingController) { 
    let uid = localStorage.getItem('user_id');
    if(uid == null || uid == ""){
      this.navCtrl.navigateForward('login');
    }else{
      this.uid = localStorage.getItem("user_id");
      this.getAllRedeemedCoupons();
    }
  }

  ngOnInit() {
  }

  onbackClick(){
    console.log("click");
    this.navCtrl.navigateForward('/available');
  }

  async getAllRedeemedCoupons(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await loading.present();
    const param = {
      id: this.uid,
    };
    this.server.getRedeemedCoupons(param).subscribe((response: any) => {
      if ( response.error == undefined) {
        console.log("coupon list",response );
        this.couponlist = response;
        loading.dismiss();
      }else{
        this.presentToast(response.error);
        this.couponlist = [];
        loading.dismiss();
      }
    });
  }

  goToDetail(id){
    const navData: NavigationExtras = {
      queryParams: {
        id: id,
        redeemed: "true"
      }
    }
    this.router.navigate(['/coupon'], navData);
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position: 'top',
      mode: 'ios',
      color: 'dark'
    });
    toast.present();
  }
}
