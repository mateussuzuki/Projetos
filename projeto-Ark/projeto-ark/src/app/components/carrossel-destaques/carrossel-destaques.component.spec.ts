import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselDestaquesComponent } from './carrossel-destaques.component';

describe('CarrosselDestaquesComponent', () => {
  let component: CarrosselDestaquesComponent;
  let fixture: ComponentFixture<CarrosselDestaquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosselDestaquesComponent]
    });
    fixture = TestBed.createComponent(CarrosselDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
