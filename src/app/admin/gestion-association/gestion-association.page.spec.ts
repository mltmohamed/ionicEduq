import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionAssociationPage } from './gestion-association.page';

describe('GestionAssociationPage', () => {
  let component: GestionAssociationPage;
  let fixture: ComponentFixture<GestionAssociationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAssociationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
