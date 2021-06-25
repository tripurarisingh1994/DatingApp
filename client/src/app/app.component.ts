import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users:any;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.http.get(`${environment.apiUrl}/users`).subscribe(data=>{
      console.log(data)
      this.users = data
    },
    (err)=> console.error(err)
    )
  }
}
