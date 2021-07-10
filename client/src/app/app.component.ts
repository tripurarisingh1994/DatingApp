import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';

  constructor(private accountSer: AccountService) {
    
  }

  ngOnInit(): void {
    this.setCurrentUser()
  }

  setCurrentUser() {
    const _user = localStorage.getItem('user')
    if(_user){
      const user: User = JSON.parse(_user)
      this.accountSer.setCurrentUser(user)
    }
  }

}
