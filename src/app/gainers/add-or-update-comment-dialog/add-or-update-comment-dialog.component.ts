import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gainer } from 'src/app/interfaces/gainer';
import { ViewGainersByDateComponent } from '../view-gainers-by-date/view-gainers-by-date.component';
import { SaveCommentsService } from 'src/app/services/save-comments.service';
import { UpdatedRecords } from 'src/app/interfaces/updated-records';
import { UpdatedCommentsMessageComponent } from '../updated-comments-message/updated-comments-message.component';

@Component({
  selector: 'app-add-or-update-comment-dialog',
  templateUrl: './add-or-update-comment-dialog.component.html',
  styleUrls: ['./add-or-update-comment-dialog.component.scss'],
})
export class AddOrUpdateCommentDialogComponent implements OnInit {
  tempComments: string = '';
  updatedCommmentsApiResponse: UpdatedRecords = {
    status: 0,
    error: '',
    numberOfRecords: 0,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Gainer,
    private saveCommentsService: SaveCommentsService,
    public dialog:MatDialog
  ) {
    this.tempComments = data.Comments;
  }

  ngOnInit(): void {}

  updateComments = new FormGroup({
    Company: new FormControl(),
    Change_Percent: new FormControl(),
    Current_Price: new FormControl(),
    Last_1_Days_Price: new FormControl(),
    Date: new FormControl(),
    Comments: new FormControl(),
  });

  saveComments(gainer: Gainer) {
    gainer.Comments = this.tempComments;
    this.saveCommentsService.saveComments(gainer).subscribe(
      (data) => {
        console.log(data);
        if(data.error == null){
          this.updatedCommmentsApiResponse.numberOfRecords = data.numberOfRecords;
          this.dialog.closeAll();
          this.dialog.open(UpdatedCommentsMessageComponent,{data: this.updatedCommmentsApiResponse.numberOfRecords})
        }
        else{
          this.updatedCommmentsApiResponse.error = data.error;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
