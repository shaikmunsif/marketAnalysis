import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { Gainer } from 'src/app/interfaces/gainer';
import { Gainers } from 'src/app/interfaces/gainers';

@Component({
  selector: 'app-view-gainer',
  templateUrl: './view-gainer.component.html',
  styleUrls: ['./view-gainer.component.scss'],
})
export class ViewGainerComponent implements OnInit {
  companyName: any;
  comments: any;
  xAxisLabels : Date[] = [];
  yAxisLabels: string[] = [];
  data1:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.companyName = this.data[0].Company;
    this.comments = this.data[0].Comments;
    this.xAxisLabels = new Array(data.length);
    this.yAxisLabels = new Array(data.length);
    let arraylength = data.length-1;
    for(var i=arraylength; i >= 0 ; i--){
      this.xAxisLabels.push(data[i].Date.split('T')[0]);
      console.log(typeof data[i].Date);
      this.yAxisLabels.push(data[i].Current_Price);
    }
    console.log(this.comments);
  }

  ngOnInit(): void {
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.xAxisLabels,
        datasets: [
          {
            label: 'Price is: ',
            data: this.yAxisLabels,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }

  //sample charts data example

  //*************************
}
