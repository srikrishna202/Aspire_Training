import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicscomponentComponent } from './basicscomponent.component';

describe('BasicscomponentComponent', () => {
  let component: BasicscomponentComponent;
  let fixture: ComponentFixture<BasicscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
