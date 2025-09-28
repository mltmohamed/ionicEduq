import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeEnfantsPage } from './liste-enfants.page';

describe('ListeEnfantsPage', () => {
  let component: ListeEnfantsPage;
  let fixture: ComponentFixture<ListeEnfantsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEnfantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
