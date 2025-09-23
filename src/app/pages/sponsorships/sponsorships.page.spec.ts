import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SponsorshipsPage } from './sponsorships.page';

describe('SponsorshipsPage', () => {
  let component: SponsorshipsPage;
  let fixture: ComponentFixture<SponsorshipsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
