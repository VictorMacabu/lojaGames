import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelDecksComponent } from './duel-decks.component';

describe('DuelDecksComponent', () => {
  let component: DuelDecksComponent;
  let fixture: ComponentFixture<DuelDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuelDecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
