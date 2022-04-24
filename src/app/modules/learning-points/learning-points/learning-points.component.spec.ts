import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPointsComponent } from './learning-points.component';

describe('LearningPointsComponent', () => {
  let component: LearningPointsComponent;
  let fixture: ComponentFixture<LearningPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
