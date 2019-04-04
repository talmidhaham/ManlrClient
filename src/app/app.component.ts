import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { Component ,OnInit } from '@angular/core';
import { UsersServiceService } from "./users-service.service";
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mnlr permission';
user : any
  constructor(private oauthService: OAuthService,private usersServiceService : UsersServiceService) {
    
    // if (!this.oauthService.hasValidAccessToken()) {

    //   this.configureWithNewConfigApi();

    // }

    console.log(this.oauthService.hasValidAccessToken());
    console.log(this.oauthService.getAccessToken());
    console.log(this.oauthService.getIdentityClaims());
    console.log(this.oauthService);
    
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  ngOnInit() {
    console.log("enter app init");
    this.configureWithNewConfigApi();

  //  this.usersServiceService.getUserProfile();
  }


  logoff()
  {
    this.oauthService.logOut();
  }
}
