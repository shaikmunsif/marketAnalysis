import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GainersRoutingModule } from './gainers-routing.module';
import { GainersComponent } from './gainers.component';
import { ViewAllGainersComponent } from './view-all-gainers/view-all-gainers.component';
import { ViewGainersByDateComponent } from './view-gainers-by-date/view-gainers-by-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AddOrUpdateCommentDialogComponent } from './add-or-update-comment-dialog/add-or-update-comment-dialog.component';
import { UpdatedCommentsMessageComponent } from './updated-comments-message/updated-comments-message.component';
import { ViewGainerComponent } from './view-gainer/view-gainer.component';


@NgModule({
  declarations: [
    GainersComponent,
    ViewAllGainersComponent,
    ViewGainersByDateComponent,
    AddOrUpdateCommentDialogComponent,
    UpdatedCommentsMessageComponent,
    ViewGainerComponent
  ],
  imports: [
    CommonModule,
    GainersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class GainersModule { }
