import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGainerComponent } from './view-gainer.component';

describe('ViewGainerComponent', () => {
  let component: ViewGainerComponent;
  let fixture: ComponentFixture<ViewGainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
