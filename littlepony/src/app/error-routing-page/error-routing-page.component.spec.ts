import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRoutingPageComponent } from './error-routing-page.component';

describe('ErrorRoutingPageComponent', () => {
  let component: ErrorRoutingPageComponent;
  let fixture: ComponentFixture<ErrorRoutingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorRoutingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRoutingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
