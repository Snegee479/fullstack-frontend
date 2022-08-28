import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl='http://localhost:8080/login';
  private registerUrl='http://localhost:8080/register';
  constructor(private http: HttpClient,private moviecomponent:MoviesService) { }

  login(value: Object): Observable<Object> {
    return this.http.post(`${this.loginUrl}`, value);
  }
  register(value: Object): Observable<Object> {
    return this.http.post(`${this.registerUrl}`, value);
  }
}
