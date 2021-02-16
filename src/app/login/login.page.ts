import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { NavController, ToastController, LoadingController} from '@ionic/angular';
import {ServiceService} from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email:any;
password:any;
  constructor(private router: Router,  public navCtrl: NavController, public server: ServiceService, public toastController: ToastController, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  // onSubmitClick() {
  //   this.router.navigate(['/available'])
  // }

  async onSubmitClick(data) {
    console.log("password", this.password);
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailfilter.test(this.email)) {
      this.presentToast("Please enter valid email address");
      return false;
    }
    if(this.email == undefined || this.password == undefined){
      this.presentToast("Please enter all details");
    }else{
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
  
      await loading.present();
  
      this.server.login(data).subscribe((response: any) => {
        console.log("response", response);
        if ( response.error == undefined) {
          if(response[0].status == 1){
            localStorage.setItem('user_email', response[0].email);
            localStorage.setItem('user_firstname', response[0].firstname);
            localStorage.setItem('user_lastname', response[0].lastname);
            localStorage.setItem('user_phone', response[0].phonenumber);
            localStorage.setItem('user_address1', response[0].address1);
            localStorage.setItem('user_address2', response[0].address2);
            localStorage.setItem('state', response[0].state);
            localStorage.setItem('zip', response[0].zip);
            localStorage.setItem('user_id', response[0].id);
            this.navCtrl.navigateForward('available');
            loading.dismiss();
          }else{
            this.presentToast("Your account has been blocked, please contact admin");
            loading.dismiss();
          }
        }else{
          this.presentToast(response.error);
          loading.dismiss();
        }
      });
    }
  }

  forgot(){
    this.navCtrl.navigateForward('forgot');
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position: 'bottom',
      mode: 'md',
      color: 'danger'
    });
    toast.present();
  }
}
