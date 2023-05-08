import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponentComponent } from './contacto-component.component';

describe('ContactoComponentComponent', () => {
  let component: ContactoComponentComponent;
  let fixture: ComponentFixture<ContactoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
