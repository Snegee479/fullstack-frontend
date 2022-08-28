import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router,private httpClient: HttpClient,private toastr: ToastrService) {
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('admin');
    sessionStorage.clear();
    console.log("in logout component");
    sessionStorage.setItem('loggedOut','true');
    this.router.navigate(['login']);
  }
  ngOnInit() {
    
  }
}
