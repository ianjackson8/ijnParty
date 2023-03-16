import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendiesComponent } from './view-attendies.component';

describe('ViewAttendiesComponent', () => {
  let component: ViewAttendiesComponent;
  let fixture: ComponentFixture<ViewAttendiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAttendiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAttendiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
