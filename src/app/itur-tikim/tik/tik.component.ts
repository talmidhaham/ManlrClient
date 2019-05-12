import { Component, OnInit ,Input} from '@angular/core';
import { UsersServiceService } from "../../users-service.service";
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable';
import { observable } from 'rxjs';

@Component({
  selector: 'app-tik',
  templateUrl: './tik.component.html',
  styleUrls: ['./tik.component.scss']
})
export class TikComponent implements OnInit {

  @Input() 
  tik: any;

  @Input() 
  user_rights: any;

  user : any

  constructor(private usersServiceService : UsersServiceService) {
    this.usersServiceService.getUserProfile().subscribe(x => this.user = x);
   }

  ngOnInit() {
  }

  getIf()
  {
    debugger;
    console.log(this.user_rights);

    var res = this.user_rights.filter(x => x == "rt")
    if (res.length > 0) {
      return true
    }
    var res2 = this.user_rights.filter(x => x == "os")

    if (res2.length > 0) {
      if (this.user.sub == this.tik.idUser) {
        return true;
      } 
      else{
        return false;
      }
    }


    return true;


  }


  getDis()
  {

    var res2 = this.user_rights.filter(x => x == "os")

    if (res2.length > 0) {
      if (this.user.sub == this.tik.idUser) {
        return false;
      } 
 
    }

    var res = this.user_rights.filter(x => x == "rt")
    if (res.length > 0) {
      return true
    }
  }

}
