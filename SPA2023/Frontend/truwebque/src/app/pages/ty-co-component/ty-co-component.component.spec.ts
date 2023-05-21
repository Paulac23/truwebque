import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyCoComponentComponent } from './ty-co-component.component';

describe('TyCoComponentComponent', () => {
  let component: TyCoComponentComponent;
  let fixture: ComponentFixture<TyCoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyCoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyCoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
