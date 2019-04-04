import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IturTikimComponent } from './itur-tikim/itur-tikim.component';

const routes: Routes = [{path:"itur",component:IturTikimComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
