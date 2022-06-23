import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceOneComponent } from './exercice-one.component';

describe('ExerciceOneComponent', () => {
  let component: ExerciceOneComponent;
  let fixture: ComponentFixture<ExerciceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
