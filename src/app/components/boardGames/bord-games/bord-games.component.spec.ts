import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordGamesComponent } from './bord-games.component';

describe('BordGamesComponent', () => {
  let component: BordGamesComponent;
  let fixture: ComponentFixture<BordGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
