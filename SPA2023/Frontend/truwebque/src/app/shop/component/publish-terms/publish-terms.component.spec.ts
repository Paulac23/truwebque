import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTermsComponent } from './publish-terms.component';

describe('PublishTermsComponent', () => {
  let component: PublishTermsComponent;
  let fixture: ComponentFixture<PublishTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
