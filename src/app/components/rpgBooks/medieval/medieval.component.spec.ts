import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedievalComponent } from './medieval.component';

describe('MedievalComponent', () => {
  let component: MedievalComponent;
  let fixture: ComponentFixture<MedievalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedievalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
