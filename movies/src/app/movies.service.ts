import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  retrievedImage: any;
  base64Data: any;
  private baseUrl = 'http://localhost:8080/getAllMovies';
  private insertUrl='http://localhost:8080/insertMovies';
  private upadteURL='http://localhost:8080/updateMovie';
  private findbyidUrl="http://localhost:8080/findByMovieId";
  private findbynameUrl="http://localhost:8080/findByMovieName";
  private deleteURL='http://localhost:8080/deleteMovie';
  constructor(private http: HttpClient) { }

  findByMovieId(id: number): Observable<any> {
    //alert(this.findbyidUrl+id);
    //this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    return this.http.get(`${this.findbyidUrl}/${id}`);
  }
  findByMovieName(movieName: string): Observable<any> {
    return this.http.get(`${this.findbynameUrl}/${movieName}`);
  }

  createMovie(movie: any,file:any): Observable<any> {
    console.log(file);
    let formData = new FormData();
    formData.append('movie', JSON.stringify(movie));
    formData.append('myFile', file[0]);
    console.log(file[0].name);
    return this.http.post(`${this.insertUrl}`, formData).pipe(map(data => {}));

    // return this.http.post(`${this.insertUrl}`, movie, HttpUploadOptions);
  }

  updateMovie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.upadteURL}/${id}`, value);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}/${id}`, { responseType: 'text' });
  }

  getMovies(): Observable<any> {
    this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    
    return this.http.get(`${this.baseUrl}`);
  }
}
