import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, ToastController, LoadingController} from '@ionic/angular';
import {ServiceService} from '../services/service.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-available',
  templateUrl: './available.page.html',
  styleUrls: ['./available.page.scss'],
})
export class AvailablePage implements OnInit {
  uid:any;
  couponlist:any = [];
  adlists:any = [];
  mydate:any;

  public sliderOptions = {
    initialSlide: 0,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };
  constructor(private router: Router, public navCtrl: NavController, public server: ServiceService, public toastController: ToastController, public loadingController: LoadingController, private datePipe: DatePipe) {
    this.uid = localStorage.getItem("user_id");
    let uid = localStorage.getItem('user_id');
    if(uid == null || uid == ""){
      this.navCtrl.navigateForward('login');
    }
    this.getAds();
    this.getAllCoupons();
   }

  ngOnInit() {
  }

  oniconClick(){
    this.router.navigate(['/account'])
  }

  onbackClick(){
    console.log("click");
    this.navCtrl.navigateForward('');
  }

  onlinkClick(){
    console.log("click");
    this.navCtrl.navigateForward('/coupon');
  }

  async getAds(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await loading.present();
    const param = {
      id: this.uid,
    };
    this.server.getAds(param).subscribe((response: any) => {
      if ( response.error == undefined) {
        console.log("ad list",response );
        this.adlists = response;
        loading.dismiss();
      }else{
        this.presentToast(response.error);
        this.adlists = [];
        loading.dismiss();
      }
    });
  }

  async getAllCoupons(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await loading.present();
    const param = {
      id: this.uid,
    };
    this.server.getCoupons(param).subscribe((response: any) => {
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

  async redeem(id){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await loading.present();
    this.mydate = new Date();
    const param = {
      id: id,
      uid: this.uid,
      date: this.datePipe.transform(this.mydate, 'yyyy-MM-dd')
    };

    console.log("param", param);

    this.server.redeemCoupon(param).subscribe((response: any) => {
      if ( response.error == undefined) {
        console.log("coupon redeemed",response );
        const navData: NavigationExtras = {
          queryParams: {
            id: id
          }
        }
        this.getAllCoupons()
        this.router.navigate(['/coupon'], navData);
        loading.dismiss(); 
      }else{
        this.presentToast(response.error);
        loading.dismiss();
      }
    });
  }

  goToDetail(id){
    const navData: NavigationExtras = {
      queryParams: {
        id: id,
        redeemed: "false"
      }
    }
    this.router.navigate(['/coupon'], navData);
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position: 'bottom',
      mode: 'ios',
      color: 'dark'
    });
    toast.present();
  }
  doRefresh(event) {  
    console.log(this.couponlist);  
    setTimeout(() => {
      this.couponlist = this.couponlist;
      event.target.complete();
    }, 1500);
  }
}


