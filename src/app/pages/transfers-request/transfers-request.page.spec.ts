import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransfersRequestPage } from './transfers-request.page';

describe('TransfersRequestPage', () => {
  let component: TransfersRequestPage;
  let fixture: ComponentFixture<TransfersRequestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
