import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosComponentComponent } from './quienes-somos-component.component';

describe('QuienesSomosComponentComponent', () => {
  let component: QuienesSomosComponentComponent;
  let fixture: ComponentFixture<QuienesSomosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesSomosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesSomosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
