import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseWorkoutComponent } from './choose-workout.component';

describe('ChooseWorkoutComponent', () => {
  let component: ChooseWorkoutComponent;
  let fixture: ComponentFixture<ChooseWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseWorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
