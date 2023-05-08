import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaComponentComponent } from './categoria-component.component';

describe('CategoriaComponentComponent', () => {
  let component: CategoriaComponentComponent;
  let fixture: ComponentFixture<CategoriaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
