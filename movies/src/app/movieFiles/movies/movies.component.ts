import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from '../movies';
import { MoviesService } from '../../movies.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie!: Observable<Movies[]>;
  error: string ='';
  admin: any;
  wel:string;
  constructor(private moviesService: MoviesService,
    private router: Router,private httpClient: HttpClient,private toastr: ToastrService) {
      this.admin=JSON.parse(sessionStorage.getItem('adminVal'));
      console.log(this.admin);
     
    }

  ngOnInit() {
    this.reloadData();
  }
  newMovie(): void {
    this.router.navigate(['insertMovies']);
  }
  reloadData() {
    this.movie = this.moviesService.getMovies();
    console.log(this.movie);   
    if(this.admin ){ 
      this.wel='Welcome '+this.admin.name+' ! Explore and have fun !';}    
      setTimeout(() => {
        this.wel='';this.admin=null;
      }, 3000); 
  }


  deleteMovie(id: number) {
    this.moviesService.deleteMovie(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => {this.error = 'This Movie is active in other screen or theater, Please check before deleting.'
        setTimeout(() => {
          this.error='';
        }, 3000);});
  }

  findByMovieId(id: number){
    this.router.navigate(['findByMovieId', id]);
  }
  // findByMovieName(movieName: string){
  //   this.router.navigate(['findByMovieId', movieName]);
  // }

  updateMovie(id: number){
    this.router.navigate(['updateMovie', id]);
  }
}