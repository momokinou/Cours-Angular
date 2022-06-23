import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceThreeComponent } from './exercice-three.component';

describe('ExerciceThreeComponent', () => {
  let component: ExerciceThreeComponent;
  let fixture: ComponentFixture<ExerciceThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
