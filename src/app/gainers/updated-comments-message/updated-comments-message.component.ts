import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updated-comments-message',
  templateUrl: './updated-comments-message.component.html',
  styleUrls: ['./updated-comments-message.component.scss']
})
export class UpdatedCommentsMessageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit(): void {
  }

}
