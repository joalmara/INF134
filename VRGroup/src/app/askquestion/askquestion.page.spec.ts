import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskquestionPage } from './askquestion.page';

describe('AskquestionPage', () => {
  let component: AskquestionPage;
  let fixture: ComponentFixture<AskquestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskquestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskquestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
