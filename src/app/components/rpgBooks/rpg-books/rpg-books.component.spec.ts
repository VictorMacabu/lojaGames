import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgBooksComponent } from './rpg-books.component';

describe('RpgBooksComponent', () => {
  let component: RpgBooksComponent;
  let fixture: ComponentFixture<RpgBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
