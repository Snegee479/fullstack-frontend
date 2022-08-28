import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../movies';
import { MoviesService } from '../../movies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {
  selectedFile:any;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  movie: Movies = new Movies();
  submitted = false;
  nullMovieNameError: string;

  constructor(private moviesService: MoviesService,private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }
  newMovie(): void {
    this.submitted = false;
    this.movie = new Movies();
  }
  save() {
    console.log(typeof this.movie);
    
    Object.entries(this.movie).forEach(([key, value], index) => {      console.log(key, value, index);
      
      if(key==="movieName"){if(value===null){
        this.nullMovieNameError="MovieName is not entered, please enter any valid input";
        console.log(this.nullMovieNameError);
      }};
    });
    if(this.nullMovieNameError){//this.router.navigate(['/getAllMovies']);}
    }else{
    this.moviesService
    .createMovie(this.movie,this.selectedFile).subscribe(data => {
      console.log(data)
      this.movie = new Movies();
      this.gotoList();
    }, 
    error => console.log(error));}
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/getAllMovies']);
  }
  onFileChanged(event:Event){console.log(event);
    this.selectedFile = (event.target as HTMLInputElement).files;
    console.log(this.selectedFile);
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (event2) => {
    this.imgURL = reader.result;}
}
}