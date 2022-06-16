import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, NgForm } from '@angular/forms';
import { Date_in } from 'src/app/interfaces/date_in';
import { Gainer } from 'src/app/interfaces/gainer';
import { GainersByDate } from 'src/app/interfaces/gainers-by-date';
import { GainersService } from 'src/app/services/gainers.service';

@Component({
  selector: 'app-view-gainers-by-date',
  templateUrl: './view-gainers-by-date.component.html',
  styleUrls: ['./view-gainers-by-date.component.scss'],
})
export class ViewGainersByDateComponent implements OnInit {
  constructor(private gainersService: GainersService) {}
  gainersApiData: any;
  errorMessage: string = '';
  companies: any;
  addingComments: boolean = false;
  gainer: Gainer = {
    Company: '',
    Change_Percent: '',
    Current_Price: 0,
    Last_1_Days_Price: 0,
    Date: null,
    Comments: '',
  };

  date = new FormControl('');

  ngOnInit(): void {}

  gainersByDate() {
    this.gainer.Date = this.date.value;
    // console.log(this.gainer);
    this.gainersService.fetchGainersByDate(this.gainer).subscribe(
      (data) => {
        this.gainersApiData = data;
        //console.log(this.gainersApiData);
        this.errorMessage = this.gainersApiData.error;

        if (this.gainersApiData.errorMessage != null) {
          this.errorMessage = this.gainersApiData.error;
          //console.log("data not found for the given date", this.errorMessage);
        } else if (this.errorMessage == null) {
          //console.log("companies are not null they have data");
          this.companies = this.gainersApiData.companies;
          console.log('Companies data is: ', this.companies);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  displayErrorMessage(): boolean {
    return this.errorMessage != null ? true : false;
  }

  displayGainersTable(): boolean {
    //console.log("displayGainersTable", this.companies, this.companies != null &&  Object.keys(this.companies).length != 0);
    return this.companies != null && Object.keys(this.companies).length != 0
      ? true
      : false;
  }

  addOrUpdateComments(){
    this.addingComments = true;
  }
}
