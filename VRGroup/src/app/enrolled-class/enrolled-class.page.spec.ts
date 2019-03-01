import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledClassPage } from './enrolled-class.page';

describe('EnrolledClassPage', () => {
  let component: EnrolledClassPage;
  let fixture: ComponentFixture<EnrolledClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledClassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
