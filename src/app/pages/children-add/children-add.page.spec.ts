import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildrenAddPage } from './children-add.page';

describe('ChildrenAddPage', () => {
  let component: ChildrenAddPage;
  let fixture: ComponentFixture<ChildrenAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
