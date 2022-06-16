import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GainersByDate } from '../interfaces/gainers-by-date';

@Injectable({
  providedIn: 'root'
})
export class AvailableDatesService {

  constructor(private http:HttpClient) { }

  fetchAllAvailableDates(){
    const url = "http://localhost:3000/availableDates";
    return this.http.get(url);
  }
}
