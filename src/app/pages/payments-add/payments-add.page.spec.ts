import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsAddPage } from './payments-add.page';

describe('PaymentsAddPage', () => {
  let component: PaymentsAddPage;
  let fixture: ComponentFixture<PaymentsAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
