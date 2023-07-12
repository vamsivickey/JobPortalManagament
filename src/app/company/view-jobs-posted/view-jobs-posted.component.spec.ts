import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobsPostedComponent } from './view-jobs-posted.component';

describe('ViewJobsPostedComponent', () => {
  let component: ViewJobsPostedComponent;
  let fixture: ComponentFixture<ViewJobsPostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobsPostedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobsPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
