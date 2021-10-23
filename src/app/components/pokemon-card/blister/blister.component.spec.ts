import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlisterComponent } from './blister.component';

describe('BlisterComponent', () => {
  let component: BlisterComponent;
  let fixture: ComponentFixture<BlisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
