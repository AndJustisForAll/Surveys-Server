import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSurveyFormComponent } from './new-survey-form.component';

describe('NewSurveyFormComponent', () => {
  let component: NewSurveyFormComponent;
  let fixture: ComponentFixture<NewSurveyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSurveyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
