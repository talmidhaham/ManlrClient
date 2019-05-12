import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  user : any

  constructor(private oauthService: OAuthService,private http: HttpClient) { 
  //   var Myheaders = new HttpHeaders({
  //     "Authorization": "Bearer " + this.oauthService.getAccessToken()
  // });
  // const requestOptions = {                                                                                                                                                                                 
  //   headers: Myheaders
  // };
  //     http.get("http://localhost/Ebusit.oidcServer/connect/userinfo",requestOptions)
  //     .subscribe(
  //       (data) => {this.user = data ; console.log(this.user)} 
  //     );

      // http.get("http://localhost/Ebusit.oidcServer/api/UserProfile",requestOptions)
      // .subscribe(
      //   (data) => {this.user = data ; console.log(this.user)} 
      // );
      

  }


  getUserProfile()
  {
    // if (this.user !== undefined ) {
    //   return this.user;
    // }

     // debugger;
    console.log("getUserProfile");
    if (this.user !== undefined ) {
      return Observable.of(this.user);//.map(o => JSON.stringify(o));
    }
    else {
      var Myheaders = new HttpHeaders({
        "Authorization": "Bearer " + this.oauthService.getAccessToken()
    });
    console.log(this.oauthService.getAccessToken());
    const requestOptions = {                                                                                                                                                                                 
      headers: Myheaders
    };
       return this.http.get("http://localhost/Ebusit.oidcServer/connect/userinfo",requestOptions)
      .map(x => this.user = x);

        return this.user;
    }
  }



  getTsvatim()
  {
    return Tsvatim;
  }

}

const Tsvatim : any = [
  {id:1,
  name:"Tsevet 1",
  user_rights:[],
  tikim: [{
    id:1,
    idUser:"fb04e7b6-c763-4549-ba93-170c2dd54714",
    name:"tik1",
    firstName:"",
    lastName:""
  },
  {
    id:2,
    idUser:"98ee76b6-d567-48d8-b072-e25cca6a0b8e",
    name:"tik2",
    firstName:"",
    lastName:""
  }
]
  },
  {id:2,
    name:"Tsevet 2",
    user_rights:[],
    tikim: [{
      id:1,
      idUser:"fb04e7b6-c763-4549-ba93-170c2dd54714",
      name:"tik1 2",
      firstName:"",
      lastName:""
    },
    {
      id:2,
      idUser:"98ee76b6-d567-48d8-b072-e25cca6a0b8e",
      name:"tik2 2",
      firstName:"",
      lastName:""
    }
  ]
    }
]