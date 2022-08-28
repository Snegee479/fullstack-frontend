import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';
import { ScreenService } from '../../screen.service';
import { Ticket } from '../ticket';
import { TicketService } from '../../ticket.service';
import { TimeSlot } from '../../time-slot';
import { TimeSlotService } from '../../time-slot.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  id: number;
  screen: Screen;
  timeSlot:TimeSlot;
  ticket:Ticket;
  constructor(private route: ActivatedRoute,private router: Router,public moviesService : MoviesService,
    private timeSlotService: TimeSlotService,private ticketService: TicketService,private screenService: ScreenService) { }

  ngOnInit() {
    // this.ticket = new Ticket();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.ticketService.findByTicketId(this.id)
      .subscribe((data: any) => {
        console.log(data)
        console.log(data.timeSlot.screen.movie.movieName);
        this.ticket = data;
      }, (error: any) => console.log(error));
  }

  // list(){
  //   this.router.navigate(['getAllScreen']);
  // }
}
 