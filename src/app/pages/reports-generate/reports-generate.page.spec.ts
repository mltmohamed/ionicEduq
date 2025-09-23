import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsGeneratePage } from './reports-generate.page';

describe('ReportsGeneratePage', () => {
  let component: ReportsGeneratePage;
  let fixture: ComponentFixture<ReportsGeneratePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsGeneratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
