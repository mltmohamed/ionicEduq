import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitorLayoutPagePage } from './visitor-layout-page.page';

describe('VisitorLayoutPagePage', () => {
  let component: VisitorLayoutPagePage;
  let fixture: ComponentFixture<VisitorLayoutPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorLayoutPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
