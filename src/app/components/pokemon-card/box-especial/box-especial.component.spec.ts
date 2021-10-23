import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEspecialComponent } from './box-especial.component';

describe('BoxEspecialComponent', () => {
  let component: BoxEspecialComponent;
  let fixture: ComponentFixture<BoxEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
