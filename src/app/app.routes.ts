import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard-admin', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage) },
  { path: 'children', loadComponent: () => import('./pages/children/children.page').then(m => m.ChildrenPage) },
  { path: 'children/add', loadComponent: () => import('./pages/children-add/children-add.page').then(m => m.ChildrenAddPage) },
  { path: 'payments', loadComponent: () => import('./pages/payments/payments.page').then(m => m.PaymentsPage) },
  { path: 'payments/add', loadComponent: () => import('./pages/payments-add/payments-add.page').then(m => m.PaymentsAddPage) },
  { path: 'expenses', loadComponent: () => import('./pages/expenses/expenses.page').then(m => m.ExpensesPage) },
  { path: 'expenses/add', loadComponent: () => import('./pages/expenses-add/expenses-add.page').then(m => m.ExpensesAddPage) },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPage) },
  { path: 'statistics', loadComponent: () => import('./pages/statistics/statistics.page').then(m => m.StatisticsPage) },
  { path: 'reports', loadComponent: () => import('./pages/reports/reports.page').then(m => m.ReportsPage) },
  { path: '**', redirectTo: 'dashboard-admin' },
  {
    path: 'dashboard-admin',
    loadComponent: () => import('./admin/dashboard-admin/dashboard-admin.page').then( m => m.DashboardAdminPage)
  },  {
    path: 'gestion-association',
    loadComponent: () => import('./admin/gestion-association/gestion-association.page').then( m => m.GestionAssociationPage)
  },
  {
    path: 'liste-enfants',
    loadComponent: () => import('./admin/liste-enfants/liste-enfants.page').then( m => m.ListeEnfantsPage)
  },
  {
    path: 'parametres',
    loadComponent: () => import('./admin/parametres/parametres.page').then( m => m.ParametresPage)
  },
  {
    path: 'admin-layout',
    loadComponent: () => import('./admin/admin-layout/admin-layout.page').then( m => m.AdminLayoutPage)
  },


// Route par défaut pour gérer les erreurs 404
];