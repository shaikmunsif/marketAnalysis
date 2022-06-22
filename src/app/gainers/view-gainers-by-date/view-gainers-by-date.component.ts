import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Date_in } from 'src/app/interfaces/date_in';
import { Gainer } from 'src/app/interfaces/gainer';
import { GainersByDate } from 'src/app/interfaces/gainers-by-date';
import { AvailableDatesService } from 'src/app/services/available-dates.service';
import { GainersService } from 'src/app/services/gainers.service';
import { AddOrUpdateCommentDialogComponent } from '../add-or-update-comment-dialog/add-or-update-comment-dialog.component';
import { ViewGainerComponent } from '../view-gainer/view-gainer.component';
@Component({
  selector: 'app-view-gainers-by-date',
  templateUrl: './view-gainers-by-date.component.html',
  styleUrls: ['./view-gainers-by-date.component.scss'],
})
export class ViewGainersByDateComponent implements OnInit {
  constructor(
    private gainersService: GainersService,
    private availableDates: AvailableDatesService,
    private dialog:MatDialog
  ) {}
  gainersApiData: any;
  availableDatesData: any;
  errorMessage: string = '';
  companies: any;
  dates: any;
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

  ngOnInit(): void {
    this.availableDates.fetchAllAvailableDates().subscribe((data) => {
      this.availableDatesData = data;
      this.dates = this.availableDatesData.availDates;
      console.log('available dates from API is', this.dates);
    });
  }

  gainersByDate() {
    this.gainer.Date = this.date.value;
    console.log(this.gainer.Date);
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

  addOrUpdateComments(company:Gainer) {
    const dialogRef = this.dialog.open(AddOrUpdateCommentDialogComponent,{
      data:company
    },);
    console.log("data to be sent to modal is: ", company);

    dialogRef.afterClosed().subscribe(result =>{
      console.log('Dialog result :', result)
    })
  }

  // Sample method for testing dialog.
  openDialog(){
    const dialogRef = this.dialog.open(AddOrUpdateCommentDialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log('Dialog result :', result)
    })
  }

  viewGainer(comapany:Gainer){
    console.log("clicked on gainer and company name is : ", comapany.Company);
    this.gainersService.fetchGainersByName(comapany).subscribe(data=>{
      console.table(data.companies);
      const dialogRef = this.dialog.open(ViewGainerComponent,{
        data : data.companies,
      })
      dialogRef.afterClosed().subscribe(result =>{
        console.log('Dialog result :', result)
      })
    })
  }
}
