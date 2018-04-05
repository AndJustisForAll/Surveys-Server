import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormReviewComponent } from './survey-form-review.component';

describe('SurveyFormReviewComponent', () => {
  let component: SurveyFormReviewComponent;
  let fixture: ComponentFixture<SurveyFormReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFormReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
