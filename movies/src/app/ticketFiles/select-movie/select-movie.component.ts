import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../../ticket.service';
import { TimeSlot } from '../../time-slot';
import { TimeSlotService } from '../../time-slot.service';

@Component({
  selector: 'app-select-movie',
  templateUrl: './select-movie.component.html',
  styleUrls: ['./select-movie.component.css']
}) 
export class SelectMovieComponent implements OnInit {
  timeSlot: TimeSlot[];ImgUrl:any;
  phone:any;email:any;ModeOfPayment:any;
  image: any;
  bookingThisSlot: boolean=false;
  ticketCount: number;
  ticket: Ticket=new Ticket();
  t: any=new TimeSlot();
  mapped: { type: string; value: any; }[];
  id: number;
  PayButtonClicked: boolean;
  exeededLimit: boolean;
  constructor(private timeSlotService: TimeSlotService,public ticketService:TicketService,
    private router: Router,public domSanitizer: DomSanitizer,
    public httpsession:HttpClient) {}

  ngOnInit() {
    this.reloadData();
  }
 
  reloadData() {
    this.timeSlotService.getTimeSlot().subscribe((data:any) => {
      console.log(data);
      data.forEach(element => {
        console.log(element.screen.movie.pic);
        this.image = element.screen.movie.pic;
        console.log(this.image)
      });
      this.timeSlot = data;
    }),
    (error: any) => {}
  }

  Book(t: any){
    this.ticket.ticketCount=this.ticketCount;
    this.ticket.timeSlot=t;
    console.log(this.ticket);
    this.save(t);

  }
    save(t:any) { 
    if(this.ticketCount> t.screen.availableNoOfSeats){
      console.log('inside if');
      this.exeededLimit=true;
      setTimeout(() => {
        this.exeededLimit=false;
      }, 5000);
    }else {
      console.log('else')
      this.ticketService
      .createTicket(this.ticket).subscribe((data: any) => {
        console.log(data)
        // this.ticket = new Ticket();
        this.id=data.ticketId;

      }, 
        (    error: any) => console.log(error));
        //    this.TicketGeneration();
    this.bookingThisSlot=true;
    console.log(this.bookingThisSlot+"next is only pay page");

        
    }
  }
  Pay(){
    this.PayButtonClicked=true;
    console.log(this.PayButtonClicked+"pay button has been clicked");
    this.TicketGeneration();

  }
  TicketGeneration() {
    this.router.navigate(['/findByTicketId',this.id]);
  }

  }