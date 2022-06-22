import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GainersByDate } from '../interfaces/gainers-by-date';
import { UpdatedRecords } from '../interfaces/updated-records';
import { Gainer } from '../interfaces/gainer';

@Injectable({
  providedIn: 'root'
})
export class SaveCommentsService {

  constructor(private http:HttpClient) { }

  saveComments(gainer:Gainer) : Observable<UpdatedRecords>{
    const url = "http://localhost:3000/saveComments"
    return this.http.put<UpdatedRecords>(url, gainer);
  }
}
