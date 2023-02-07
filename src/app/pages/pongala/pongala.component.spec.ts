import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongalaComponent } from './pongala.component';

describe('PongalaComponent', () => {
  let component: PongalaComponent;
  let fixture: ComponentFixture<PongalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PongalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PongalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
