import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMoviesComponent } from './movieFiles/create-movies/create-movies.component';
import { CreateTheaterComponent } from './theaterFiles/create-theater/create-theater.component';
import { MovieDetailsComponent } from './movieFiles/movie-details/movie-details.component';
import { MoviesComponent } from './movieFiles/movies/movies.component';
import { TheaterDetailsComponent } from './theaterFiles/theater-details/theater-details.component';
import { TheaterComponent } from './theaterFiles/theater/theater.component';
import { UpdateMoviesComponent } from './movieFiles/update-movies/update-movies.component';
import { UpdateTheaterComponent } from './theaterFiles/update-theater/update-theater.component';
import { CreateScreenComponent } from './screenFiles/create-screen/create-screen.component';
import { ScreenDetailsComponent } from './screenFiles/screen-details/screen-details.component';
import { ScreenComponent } from './screenFiles/screen/screen.component';
import { UpdateScreenComponent } from './screenFiles/update-screen/update-screen.component';
import { TimeSlotComponent } from './timeSlotFiles/time-slot/time-slot.component';
import { CreateTimeSlotComponent } from './timeSlotFiles/create-time-slot/create-time-slot.component';
import { TimeSlotDetailsComponent } from './timeSlotFiles/time-slot-details/time-slot-details.component';
import { UpdatetimeSlotComponent } from './timeSlotFiles/updatetime-slot/updatetime-slot.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { SelectMovieComponent } from './ticketFiles/select-movie/select-movie.component';
import { TicketDetailComponent } from './ticketFiles/ticket-detail/ticket-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { LogoutComponent } from './logout/logout.component';
import { TicketComponent } from './ticketFiles/ticket/ticket.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'getAllMovies', component: MoviesComponent },
  { path: 'insertMovies', component: CreateMoviesComponent },
  { path: 'updateMovie/:id', component: UpdateMoviesComponent },
  { path: 'findByMovieId/:id', component: MovieDetailsComponent },
  { path: 'findByMovieName/:movieName', component: SearchMovieComponent },

  { path: 'getAllTheater', component: TheaterComponent },
  { path: 'insertTheater', component: CreateTheaterComponent },
  { path: 'updateTheater/:id', component: UpdateTheaterComponent },
  { path: 'findByTheaterId/:id', component:  TheaterDetailsComponent},

  { path: 'getAllTimeSlot', component: TimeSlotComponent },
  { path: 'insertTimeSlot', component: CreateTimeSlotComponent },
  { path: 'updateTimeSlot/:id', component: UpdatetimeSlotComponent },
  { path: 'findByTimeId/:id', component:  TimeSlotDetailsComponent},

  { path: 'getAllScreen', component: ScreenComponent },
  { path: 'insertScreen', component: CreateScreenComponent },
  { path: 'updateScreen/:id', component: UpdateScreenComponent },
  { path: 'findByScreenId/:id', component:  ScreenDetailsComponent},

  { path: 'insertTicket', component: TicketComponent },
  { path: 'findByTicketId/:id', component:  TicketDetailComponent},
  { path: 'selectMovie', component:  SelectMovieComponent},





];

@NgModule({
  imports: [    CommonModule,    ToastNoAnimationModule.forRoot(),
    // BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
