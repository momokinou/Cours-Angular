import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie1ObjetComponent } from './partie1-objet.component';

describe('Partie1ObjetComponent', () => {
  let component: Partie1ObjetComponent;
  let fixture: ComponentFixture<Partie1ObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Partie1ObjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partie1ObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
