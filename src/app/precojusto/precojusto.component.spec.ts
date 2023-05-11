import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecojustoComponent } from './precojusto.component';

describe('PrecojustoComponent', () => {
  let component: PrecojustoComponent;
  let fixture: ComponentFixture<PrecojustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecojustoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecojustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
