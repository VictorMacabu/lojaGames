import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativosComponent } from './cooperativos.component';

describe('CooperativosComponent', () => {
  let component: CooperativosComponent;
  let fixture: ComponentFixture<CooperativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
