import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesAddPage } from './expenses-add.page';

describe('ExpensesAddPage', () => {
  let component: ExpensesAddPage;
  let fixture: ComponentFixture<ExpensesAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
