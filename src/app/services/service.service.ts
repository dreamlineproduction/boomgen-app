import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpBackend } from '@angular/common/http';
import { NavController} from '@ionic/angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  options:any;
  url = "http://boomgen.crtvecode.in/api/";
  constructor(private http: HttpClient,private httpBackend: HttpBackend, public navCtrl: NavController) {
    this.http = new HttpClient(this.httpBackend);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.options = {
      headers: headers
    }
  }

  login(data){  
    return this.http.post(this.url+'login',data,this.options)
             .pipe(map(results => results));
  }

  forgotPassword(data){  
    return this.http.post(this.url+'forgotpassword',data,this.options)
             .pipe(map(results => results));
  }

  verifyCode(data){  
    return this.http.post(this.url+'verifyotp',data,this.options)
             .pipe(map(results => results));
  }

  changepasswordafterverified(data){  
    return this.http.post(this.url+'changepasswordafterverified',data,this.options)
             .pipe(map(results => results));
  }

  updateProfile(data){  
    return this.http.post(this.url+'updateprofile',data,this.options)
             .pipe(map(results => results));
  }

  getCoupons(data){  
    return this.http.post(this.url+'getcoupons',data,this.options)
             .pipe(map(results => results));
  }

  getAds(data){  
    return this.http.post(this.url+'getads',data,this.options)
             .pipe(map(results => results));
  }

  getRedeemedCoupons(data){  
    return this.http.post(this.url+'getredeemedcoupons',data,this.options)
             .pipe(map(results => results));
  }

  getRedeemedCouponDetails(data){  
    return this.http.post(this.url+'getredeemedcoupondetails',data,this.options)
             .pipe(map(results => results));
  }

  getCouponDetails(data){  
    return this.http.post(this.url+'getcoupondetails',data,this.options)
             .pipe(map(results => results));
  }

  redeemCoupon(data){  
    return this.http.post(this.url+'redeemcoupon',data,this.options)
             .pipe(map(results => results));
  }
}
