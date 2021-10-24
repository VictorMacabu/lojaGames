import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckProntoComponent } from './deck-pronto.component';

describe('DeckProntoComponent', () => {
  let component: DeckProntoComponent;
  let fixture: ComponentFixture<DeckProntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckProntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
