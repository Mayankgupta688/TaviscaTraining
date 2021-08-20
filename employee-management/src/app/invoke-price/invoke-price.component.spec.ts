import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvokePriceComponent } from './invoke-price.component';

describe('InvokePriceComponent', () => {
  let component: InvokePriceComponent;
  let fixture: ComponentFixture<InvokePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvokePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvokePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
