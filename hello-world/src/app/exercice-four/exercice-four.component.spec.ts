import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceFourComponent } from './exercice-four.component';

describe('ExerciceFourComponent', () => {
  let component: ExerciceFourComponent;
  let fixture: ComponentFixture<ExerciceFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
