import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManOrWorkComponent } from './man-or-work.component';

describe('ManOrWorkComponent', () => {
  let component: ManOrWorkComponent;
  let fixture: ComponentFixture<ManOrWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManOrWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManOrWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
