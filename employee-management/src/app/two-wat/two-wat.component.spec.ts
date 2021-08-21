import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWatComponent } from './two-wat.component';

describe('TwoWatComponent', () => {
  let component: TwoWatComponent;
  let fixture: ComponentFixture<TwoWatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
