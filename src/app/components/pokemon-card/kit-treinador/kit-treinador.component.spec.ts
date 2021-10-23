import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitTreinadorComponent } from './kit-treinador.component';

describe('KitTreinadorComponent', () => {
  let component: KitTreinadorComponent;
  let fixture: ComponentFixture<KitTreinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitTreinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitTreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
