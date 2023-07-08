import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaModoComponent } from './troca-modo.component';

describe('TrocaModoComponent', () => {
  let component: TrocaModoComponent;
  let fixture: ComponentFixture<TrocaModoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrocaModoComponent]
    });
    fixture = TestBed.createComponent(TrocaModoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
