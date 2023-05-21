import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesComponentComponent } from './publicaciones-component.component';

describe('PublicacionesComponentComponent', () => {
  let component: PublicacionesComponentComponent;
  let fixture: ComponentFixture<PublicacionesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
