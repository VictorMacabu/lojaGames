import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckInicialComponent } from './deck-inicial.component';

describe('DeckInicialComponent', () => {
  let component: DeckInicialComponent;
  let fixture: ComponentFixture<DeckInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
