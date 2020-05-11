import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { VideoModel } from 'src/app/models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient,
    @Inject('API_URL') private apiUrl: string) { }

  getHeaders() {
    let user = JSON.parse(localStorage.getItem('user'))
    let token = user ? user.token : ''
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }
  }

  getVideos(searchId): Observable<VideoModel[]> {
    return this.http.get<VideoModel[]>(`${this.apiUrl}/video/${searchId}`, this.getHeaders())
      .pipe(
        catchError(this.error))
  }

  error(error: HttpErrorResponse) {
    console.log(error)
    return throwError(error);
  }
}
