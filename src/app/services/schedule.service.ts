import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ScheduleModel } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

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

  getSchedule (): Observable<ScheduleModel> {
    let API_URL = `${this.apiUrl}/schedule`;
    return this.http.get<ScheduleModel>(API_URL, this.getHeaders())
      .pipe(
        catchError(this.error)
      )
  }

  insert(data): Observable<any> {
    let API_URL = `${this.apiUrl}/schedule`;
    return this.http.post<ScheduleModel>(API_URL, data, this.getHeaders())
      .pipe(
        catchError(this.error)
      )
  }

  error(error: HttpErrorResponse) {
    console.log(error)
    return throwError(error);
  }
}
