import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from "../users-service.service";
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { TikComponent } from './tik/tik.component';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable';
import { observable } from 'rxjs';


@Component({
  selector: 'app-itur-tikim',
  templateUrl: './itur-tikim.component.html',
  styleUrls: ['./itur-tikim.component.scss']
})
export class IturTikimComponent implements OnInit {


  user : any

  tsvatim : any

  userTsvatim : any;

  SelectedTTsevet: any;

  constructor(private usersServiceService : UsersServiceService) {
    this.userTsvatim = [];
    console.log("call user rights");
    var st1 = this.usersServiceService.getUserProfile().subscribe(data => {st1 = data.rights;
      var st = st1;
      console.log(st);
      var st2 = JSON.parse(st);
  
      this.user = st2.rights;
  
      console.log(this.user);
      this.tsvatim = this.usersServiceService.getTsvatim();
  
      // this.userTsvatim = from(this.tsvatim);
  
       //this.userTsvatim = this.tsvatim.filter(x => x.id == 1);
       console.log(this.userTsvatim);
       this.filtme() ;
       console.log(this.userTsvatim);
  
       this.SelectedTTsevet = this.userTsvatim[0];});

     
    
    }


    filtme() 
    {
      var e = [];
      this.user.forEach(element => {
        console.log(element.ts);

       
        console.log(e);
        var arr = this.tsvatim.filter(x => x.id == parseInt(element.ts));
        console.log("imprime arr");
      console.log( arr);
          arr[0].user_rights.push(element.role);
      console.log(e.filter(d => d == arr[0].id).length);
            if (e.filter(d => d == arr[0].id).length <= 0) {
              this.userTsvatim = this.userTsvatim.concat(arr);
              e.push(parseInt(element.ts));
            }
           
          
        });

    }

  ngOnInit() {
  }


  SelectedChange()
  {
    console.log("wright val")
    console.log(this.SelectedTTsevet);
  }


  getIf()
  {
    return true;
  }

}
