import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../movieFiles/movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movieName: string; 
  movie: any;
  constructor(private route: ActivatedRoute,private router: Router,private httpClient: HttpClient,
    private moviesService: MoviesService) { }

  ngOnInit() {
    this.movie = new Movies();
 
    this.movieName = this.route.snapshot.params['movieName'];
    console.log(this.movieName);
    this.moviesService.findByMovieName(this.movieName)
      .subscribe((data: Movies) => {
        console.log(data)
        this.movie = data;
      }, (error: any) => console.log(error));
  }

  list(){
    this.router.navigate(['selectMovie']);
  }

}
