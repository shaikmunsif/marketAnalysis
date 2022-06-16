import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllGainersComponent } from './view-all-gainers.component';

describe('ViewAllGainersComponent', () => {
  let component: ViewAllGainersComponent;
  let fixture: ComponentFixture<ViewAllGainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllGainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllGainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
