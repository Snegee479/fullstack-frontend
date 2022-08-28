import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  admin = new Admin();
  submitted = false;
  loggedOut: boolean;

  constructor(private loginService: LoginService,private httpClient: HttpClient,
    private router: Router) {
     } 

  ngOnInit() {

  }
  save() {
    sessionStorage.setItem('registered','true');
    console.log(this.admin);
    this.loginService
    .register(this.admin).subscribe(data => {
      Object.entries(data).forEach(([key, value], index) => {
        console.log(key, value, index);
        });
    }, 
    error => console.log(error));
    this.router.navigate(['/login']);
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}