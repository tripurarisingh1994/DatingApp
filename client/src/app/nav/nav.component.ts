import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model:any = {}

  constructor(public accountSer: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  login(){
    this.accountSer.login(this.model).subscribe(res=>{
      this.router.navigateByUrl("/members")
    },
    (error)=> {
      console.error(error)
      this.toastr.error(error.error)
    })
  }

  logout(){
    this.accountSer.logout()
    this.router.navigateByUrl("/")
  }

}
