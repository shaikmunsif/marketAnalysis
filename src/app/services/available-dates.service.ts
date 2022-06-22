import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GainersByDate } from '../interfaces/gainers-by-date';
import { AvailableDatesApi } from '../interfaces/available-dates-api';

@Injectable({
  providedIn: 'root'
})
export class AvailableDatesService {

  constructor(private http:HttpClient) { }

  fetchAllAvailableDates():Observable<AvailableDatesApi>{
    const url = "http://localhost:3000/availableDates";
    return this.http.get<AvailableDatesApi>(url);
  }
}
