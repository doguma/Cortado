import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraProfileComponent } from './extra-profile.component';

describe('ExtraProfileComponent', () => {
  let component: ExtraProfileComponent;
  let fixture: ComponentFixture<ExtraProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
