import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gainer } from '../interfaces/gainer';
import { Observable } from 'rxjs';
import { GainersByDate } from '../interfaces/gainers-by-date';

@Injectable({
  providedIn: 'root'
})
export class GainersService {

  constructor(private http:HttpClient) { }

  fetchGainersByDate(gainerData:Gainer) : Observable<GainersByDate>{
    const url = "http://localhost:3000/gainersByDate";
    //console.log("Api is called", gainerData);
    return this.http.post<GainersByDate>(url, gainerData);
  }
}
