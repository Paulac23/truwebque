import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesComponentComponent } from './preguntas-frecuentes-component.component';

describe('PreguntasFrecuentesComponentComponent', () => {
  let component: PreguntasFrecuentesComponentComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasFrecuentesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasFrecuentesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
