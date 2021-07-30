import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.scss']
})
export class TestErrorsComponent implements OnInit {
  validationErrors:string[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(`${environment.apiUrl}/buggy/not-found`).subscribe(res=>{
      console.log(res);
    },(err)=>{
      console.error(err);
    })
  }

  get400Error() {
    this.http.get(`${environment.apiUrl}/buggy/bad-request`).subscribe(res=>{
      console.log(res);
    },(err)=>{
      console.error(err);
    })
  }

  get500Error() {
    this.http.get(`${environment.apiUrl}/buggy/server-error`).subscribe(res=>{
      console.log(res);
    },(err)=>{
      console.error(err);
    })
  }

  get401Error() {
    this.http.get(`${environment.apiUrl}/buggy/auth`).subscribe(res=>{
      console.log(res);
    },(err)=>{
      console.error(err);
    })
  }

  get400ValidationError() {
    this.http.get(`${environment.apiUrl}/buggy/not-found`).subscribe(res=>{
      console.log(res);
    },(err)=>{
      console.error(err);
      this.validationErrors = err
    })
  }
  
}
