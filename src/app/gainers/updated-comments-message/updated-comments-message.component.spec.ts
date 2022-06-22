import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedCommentsMessageComponent } from './updated-comments-message.component';

describe('UpdatedCommentsMessageComponent', () => {
  let component: UpdatedCommentsMessageComponent;
  let fixture: ComponentFixture<UpdatedCommentsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedCommentsMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedCommentsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
