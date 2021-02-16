import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController} from '@ionic/angular';
import {ServiceService} from '../services/service.service';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {
  id:any;
  logo:any;
  title:any;
  percentage:any;
  description:any;
  expiry:any; 
  coupon:any;
  loaded:any = false;
  screenshotBtn:boolean = true;
  redeemed:boolean = false;
  constructor(private router: Router,  
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public server: ServiceService, 
    public toastController: ToastController, 
    public loadingController: LoadingController,
    private screenshot: Screenshot,
    private datePipe: DatePipe
  ) { 
    console.log("yes");
    let uid = localStorage.getItem('user_id');
    if(uid == null || uid == ""){
      this.navCtrl.navigateForward('login');
    }
    this.route.queryParams.subscribe((data) => {
      console.log(data['redeemed']);
      if (data && data.id) {
        if(data['redeemed'] == "true"){
          this.redeemed = true;
          this.id = data.id;
          this.getRedeemedCouponDetails(this.id);
        }else{
          this.id = data.id;
          this.getCouponDetails(this.id);
        }
      } else {
        this.navCtrl.back();
      }
    });
  }

  ngOnInit() {
  }

  screenShot(){
    this.screenshotBtn = false;
    this.screenshot.save('jpg', 80, this.title+'.jpg').then(()=>{
      this.screenshotBtn = true;
      this.presentToast("Screenshot saved");
    });
  }


  oniconClick(){
    this.router.navigate(['/account'])
  }

  onbackClick(){
    if(this.redeemed){
      this.navCtrl.navigateForward('/redeemedcoupons');
    }else{
      this.navCtrl.navigateForward('/available');
    }
  }

  async getCouponDetails(id){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await loading.present();

    const param = {
      id: id
    };
    this.server.getCouponDetails(param).subscribe((response: any) => {
      if ( response.error == undefined) {
        this.coupon = response;
        console.log("coupon details",this.coupon );
        this.title = this.coupon.title;
        this.loaded = true;
        loading.dismiss();
      }else{
        this.presentToast("Something went wrong");
        loading.dismiss();
      }
    });
  }

  async getRedeemedCouponDetails(id){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await loading.present();

    const param = {
      id: id
    };
    this.server.getRedeemedCouponDetails(param).subscribe((response: any) => {
      if ( response.error == undefined) {
        this.coupon = response;
        console.log("coupon details",this.coupon );
        const date =  this.datePipe.transform(this.coupon.purchased, 'dd/MM/yyyy')
        this.coupon.purchased = date;
        console.log("coupon details",this.coupon );
        this.title = this.coupon.title;
        this.loaded = true;
        loading.dismiss();
      }else{
        this.presentToast("Something went wrong");
        loading.dismiss();
      }
    });
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
