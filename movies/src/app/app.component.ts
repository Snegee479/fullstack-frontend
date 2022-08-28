import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BOOK YOUR MOVIE TICKETS';
  role:string
  roleIsAdmin: boolean;
  roleIsUser: boolean;
  movieName: any;
  roleistrue: boolean;
  constructor(private router: Router,private httpClient: HttpClient,private toastr: ToastrService) {
    this.role=sessionStorage.getItem('role');
    console.log(this.role);
 
    if(this.role==='admin'){
      this.roleIsAdmin=true;
      this.roleistrue=true;
    }
    if(this.role==='user'){
      this.roleIsUser=true;
      this.roleistrue=true;
    }
  }
  ngOnInit() {
    
  }
  findByMovieName(){
      this.router.navigate(['findByMovieName', this.movieName]);
    }
}
