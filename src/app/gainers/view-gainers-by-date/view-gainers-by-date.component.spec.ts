import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGainersByDateComponent } from './view-gainers-by-date.component';

describe('ViewGainersByDateComponent', () => {
  let component: ViewGainersByDateComponent;
  let fixture: ComponentFixture<ViewGainersByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGainersByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGainersByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
