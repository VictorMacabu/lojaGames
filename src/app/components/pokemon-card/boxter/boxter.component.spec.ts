import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxterComponent } from './boxter.component';

describe('BoxterComponent', () => {
  let component: BoxterComponent;
  let fixture: ComponentFixture<BoxterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
