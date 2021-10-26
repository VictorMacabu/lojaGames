import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategicosComponent } from './estrategicos.component';

describe('EstrategicosComponent', () => {
  let component: EstrategicosComponent;
  let fixture: ComponentFixture<EstrategicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrategicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
