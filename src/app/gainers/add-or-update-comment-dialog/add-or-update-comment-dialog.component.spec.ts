import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateCommentDialogComponent } from './add-or-update-comment-dialog.component';

describe('AddOrUpdateCommentDialogComponent', () => {
  let component: AddOrUpdateCommentDialogComponent;
  let fixture: ComponentFixture<AddOrUpdateCommentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateCommentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrUpdateCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
