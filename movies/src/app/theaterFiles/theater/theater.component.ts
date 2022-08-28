import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Theater } from '../theater';
import { TheaterService } from '../../theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {
  theater!: Observable<Theater[]>;
  error:any;
  constructor(private theaterService: TheaterService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.theater = this.theaterService.getTheater();
  }

  deleteTheater(id: number) {
    this.theaterService.deleteTheater(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => {this.error = 'This Theater is active for other screen or movie, Please check before deleting.'
        setTimeout(() => {
          this.error='';
        }, 5000);});
  }
  newTheater(): void {
    this.router.navigate(['insertTheater']);
  }
  findByTheaterId(id: number){
    this.router.navigate(['findByTheaterId', id]);
  }

  updateTheater(id: number){
    this.router.navigate(['updateTheater', id]);
  }
}