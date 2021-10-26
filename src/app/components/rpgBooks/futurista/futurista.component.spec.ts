import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturistaComponent } from './futurista.component';

describe('FuturistaComponent', () => {
  let component: FuturistaComponent;
  let fixture: ComponentFixture<FuturistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
