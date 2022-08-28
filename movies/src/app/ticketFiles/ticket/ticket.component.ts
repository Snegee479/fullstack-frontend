import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../../movieFiles/movies';
import { MoviesService } from '../../movies.service';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
    id: number; 
    movie: any;
    constructor(private route: ActivatedRoute,private router: Router,private httpClient: HttpClient,
      private moviesService: MoviesService,private ticketService: TicketService) { }
  
    ngOnInit() {
      this.movie = new Movies();
  
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      this.moviesService.findByMovieId(this.id)
        .subscribe((data: Movies) => {
          console.log(data)
          this.movie = data;
        }, (error: any) => console.log(error));
    }
  
    list(){
      this.router.navigate(['getAllMovies']);
    }
  
  }
  