import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { YouTubeSearchModel } from '../models/youtube-search.model';

@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchService {  
  constructor(private http: HttpClient,
    @Inject('API_URL') private apiUrl: string) { }

  getHeaders() {
    let user = JSON.parse(localStorage.getItem('user'))
    let token = user ? user.token : ''
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':  token
      })
    }
  }
  getSearches(): Observable<YouTubeSearchModel[]> {
    return this.http.get<YouTubeSearchModel[]>(`${this.apiUrl}/search`, this.getHeaders())
      .pipe(
        catchError(this.error))
  }

  insert(data): Observable<any> {
    let API_URL = `${this.apiUrl}/search`;
    return this.http.post<YouTubeSearchModel>(API_URL, data, this.getHeaders())
      .pipe(
        catchError(this.error)
      )
  }

  remove(id): Observable<any> {
    let API_URL = `${this.apiUrl}/search/${id}`;
    return this.http.delete<YouTubeSearchModel>(API_URL, this.getHeaders()).pipe(
      catchError(this.error)
    )
  }

  error(error: HttpErrorResponse) {
    localStorage.removeItem('user')
    if (error.status === 403) {
      window.location.href = '/'
    }
    return throwError(error);
  }
}
