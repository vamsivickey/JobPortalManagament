import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterTestingComponent } from './toaster-testing.component';

describe('ToasterTestingComponent', () => {
  let component: ToasterTestingComponent;
  let fixture: ComponentFixture<ToasterTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasterTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
