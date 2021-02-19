import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, LoadingController} from '@ionic/angular';
import {ServiceService} from '../services/service.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  fname:any;
  lname:any;
  pnumber:any;
  aline1:any;
  aline2:any;
  state:any;
  zip:any;
  uid:any;
  email:any;
  path:any;
  constructor(private router: Router, public navCtrl: NavController, public server: ServiceService, public toastController: ToastController, public loadingController: LoadingController) { 
    this.fname = localStorage.getItem("user_firstname");
    this.lname = localStorage.getItem("user_lastname");
    this.pnumber = localStorage.getItem("user_phone");
    this.aline1 = localStorage.getItem("user_address1");
    this.aline2 = localStorage.getItem("user_address2");
    this.state = localStorage.getItem("state");
    this.zip = localStorage.getItem("zip");
    this.uid = localStorage.getItem("user_id");
    this.email = localStorage.getItem("user_email");
    this.path = localStorage.getItem("user_image");
    let uid = localStorage.getItem('user_id');
    if(uid == null || uid == ""){
      this.navCtrl.navigateForward('login');
    }
  }

  ngOnInit() {
  }
  oniconClick(){
    this.router.navigate(['/account'])
  }
  onbackClick(){
    console.log("click");
    this.navCtrl.navigateForward('/available');
  }
  onlogoutClick(){
    localStorage.clear();
    this.navCtrl.navigateForward('/login');
  }

  async onSubmitClick(data){
    const param = {
      email : this.email,
      userid : this.uid,
      firstname : data.fname,
      lastname : data.lname,
      phone : data.pnumber,
      address1 : data.aline1,
      address2 : data.aline2,
      state : data.state,
      zip : data.zip
    }
    console.log("data", param);
    if(this.fname == undefined || this.lname == undefined || this.pnumber == undefined || this.aline1 == undefined || this.aline2 == undefined || this.state == undefined || this.zip == undefined || this.fname == "" || this.lname == "" || this.pnumber == "" || this.aline1 == "" || this.aline2 == "" || this.state == "" || this.zip == ""){
      this.presentToast("Please enter all details");
    }else{
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      await loading.present();
  
      this.server.updateProfile(param).subscribe((response: any) => {
        console.log("response", response);
        if ( response.error == undefined) {
          localStorage.setItem('user_firstname', response.firstname);
          localStorage.setItem('user_lastname', response.lastname);
          localStorage.setItem('user_phone', response.phonenumber);
          localStorage.setItem('user_address1', response.address1);
          localStorage.setItem('user_address2', response.address2);
          localStorage.setItem('state', response.state);
          localStorage.setItem('zip', response.zip);
          this.presentToast("Updated Successfully");
          loading.dismiss();
        }else{
          this.presentToast(response.error);
          loading.dismiss();
        }
      });
    }
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
