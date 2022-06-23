import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceFiveComponent } from './exercice-five.component';

describe('ExerciceFiveComponent', () => {
  let component: ExerciceFiveComponent;
  let fixture: ComponentFixture<ExerciceFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
