import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TimeSlot } from '../../time-slot';
import { TimeSlotService } from '../../time-slot.service';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {
  timeSlot: Observable<TimeSlot[]>;
  error: string;
  constructor(private timeSlotService: TimeSlotService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.timeSlot = this.timeSlotService.getTimeSlot();
  }

  deleteTimeSlot(id: number) {
    this.timeSlotService.deleteTimeSlot(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => {this.error = 'This Timeslot is active in other screen or theater, Please check before deleting.'
        setTimeout(() => {
          this.error='';
        }, 3000);});

  }

  findByTimeId(id: number){
    this.router.navigate(['findByTimeId', id]);
  }
  newTimeSlot(){
    this.router.navigate(['insertTimeSlot']);
  }

  updateTimeSlot(id: number){
    this.router.navigate(['updateTimeSlot', id]);
  }
}