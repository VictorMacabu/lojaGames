import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColectionComponent } from './card-colection.component';

describe('CardColectionComponent', () => {
  let component: CardColectionComponent;
  let fixture: ComponentFixture<CardColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardColectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
