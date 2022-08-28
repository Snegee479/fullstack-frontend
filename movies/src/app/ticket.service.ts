import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private selectmovieurl='http://localhost:8080/selectMovie';
  private selectparticularMovieurl='http://localhost:8080/selectparticularMovie';
  private baseUrl = 'http://localhost:8080/getAllTicket';
  private insertUrl='http://localhost:8080/insertTicket';
  private upadteURL='http://localhost:8080/updateTicket';
  private findbyidUrl='http://localhost:8080/findByTicketId';
  private deleteURL='http://localhost:8080/deleteTicket';
  constructor(private http: HttpClient) { }

  findByTicketId(id: number): Observable<any> { 
    return this.http.get(`${this.findbyidUrl}/${id}`);
  }
  createTicket(ticket: Object): Observable<Object> {
    return this.http.post(`${this.insertUrl}`, ticket);
  }

  updateTicket(id: number, ticket: any): Observable<Object> {
    return this.http.put(`${this.upadteURL}/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}/${id}`, { responseType: 'text' });
  }

  getTicket(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  selectMovie(): Observable<any> {
    return this.http.get(`${this.selectmovieurl}`);
  }
  selectparticularMovie(id: number): Observable<any> {
    return this.http.get(`${this.selectparticularMovieurl}/${id}`);
  }
  
}
