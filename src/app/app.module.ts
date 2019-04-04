import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OAuthModule } from "angular-oauth2-oidc";

import { HttpClientModule } from '@angular/common/http';

import { UsersServiceService } from "./users-service.service";
import { IturTikimComponent } from './itur-tikim/itur-tikim.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';


import { FormsModule } from '@angular/forms';
import { TikComponent } from './itur-tikim/tik/tik.component';

@NgModule({
  declarations: [
    AppComponent,
    IturTikimComponent,
    TikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost/Ebusit.oidcServer/connect'],
          sendAccessToken: true
      }
  }),
    HttpClientModule,BrowserAnimationsModule,MatCardModule,MatSelectModule,FormsModule,
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
