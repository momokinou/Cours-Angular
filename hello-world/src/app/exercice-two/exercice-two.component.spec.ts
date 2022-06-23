import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceTwoComponent } from './exercice-two.component';

describe('ExerciceTwoComponent', () => {
  let component: ExerciceTwoComponent;
  let fixture: ComponentFixture<ExerciceTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
