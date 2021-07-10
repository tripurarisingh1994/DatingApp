import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter()

  model:any = {}

  constructor(private accountSer: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountSer.register(this.model).subscribe(res => {
      console.log(res);
      this.cancel()
    }, (err) =>{
      console.error(err);
    })
  }

  cancel(){
    this.cancelRegister.emit(false)
  }

}
