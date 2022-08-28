import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin = new Admin();
  submitted = false;
  role: any;
  loggedOut: boolean;
  registered: boolean;

  constructor(private loginService: LoginService,private httpClient: HttpClient,
    private router: Router) {
      if(sessionStorage.getItem('loggedOut')==='true'){
        this.loggedOut=true;
        setTimeout(() => {
          this.loggedOut=false;
          sessionStorage.removeItem('loggedOut');
        }, 5000);}
        if(sessionStorage.getItem('registered')==='true'){
          this.registered=true;
          setTimeout(() => {
            sessionStorage.removeItem('registered');
            this.registered=false;
          }, 5000);}
     } 

  ngOnInit() {
    
  }
  save() {
    console.log(this.admin);
    this.loginService
    .login(this.admin).subscribe(data => {
      Object.entries(data).forEach(([key, value], index) => {
        console.log(key, value, index);
        
        if(key==="role"){this.role=value};
      });
      console.log(this.role);
      sessionStorage.setItem('adminVal', JSON.stringify(data));
      console.log(JSON.parse(sessionStorage.getItem('adminVal')));
      this.admin = new Admin();
      sessionStorage.setItem('role',this.role);
      if(this.role==="admin"){
        sessionStorage.setItem('adminrole',this.role);
        this.router.navigate(['getAllMovies']);
      }
      else if(this.role==="user"){
        sessionStorage.setItem('userrole',this.role);
        this.router.navigate(['selectMovie']);
      }
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}