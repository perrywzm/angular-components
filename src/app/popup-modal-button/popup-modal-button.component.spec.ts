import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModalButtonComponent } from './popup-modal-button.component';

describe('PopupModalButtonComponent', () => {
  let component: PopupModalButtonComponent;
  let fixture: ComponentFixture<PopupModalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
