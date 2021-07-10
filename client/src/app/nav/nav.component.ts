import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model:any = {}

  constructor(public accountSer: AccountService) { }

  ngOnInit(): void {
  }


  login(){
    this.accountSer.login(this.model).subscribe(res=>{
      console.log(res)
    },
    (error)=> console.error(error))
  }

  logout(){
    this.accountSer.logout()
  }

}
