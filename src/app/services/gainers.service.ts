import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gainer } from '../interfaces/gainer';
import { Observable } from 'rxjs';
import { GainersByDate } from '../interfaces/gainers-by-date';
import { GainersByName } from '../interfaces/gainers-by-name';

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

  fetchGainersByName(gainersData:Gainer) : Observable<GainersByName>{
    const url = "http://localhost:3000/gainersByName";
    console.log("calling API - gainers By Name");
    return this.http.post<GainersByName>(url, gainersData);
  }
}
