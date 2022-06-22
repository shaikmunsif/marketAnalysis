import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gainers } from 'src/app/interfaces/gainers';

@Component({
  selector: 'app-view-gainer',
  templateUrl: './view-gainer.component.html',
  styleUrls: ['./view-gainer.component.scss']
})
export class ViewGainerComponent implements OnInit {

  companyName:any;
  comments:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
     this.companyName = this.data[0].Company;
     this.comments = this.data[0].Comments;
     console.log(this.comments);
  }


  ngOnInit(): void {
  }

  
}

