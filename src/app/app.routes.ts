import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage) },
  { path: 'children', loadComponent: () => import('./pages/children/children.page').then(m => m.ChildrenPage) },
  { path: 'children/add', loadComponent: () => import('./pages/children-add/children-add.page').then(m => m.ChildrenAddPage) },
  { path: 'payments', loadComponent: () => import('./pages/payments/payments.page').then(m => m.PaymentsPage) },
  { path: 'payments/add', loadComponent: () => import('./pages/payments-add/payments-add.page').then(m => m.PaymentsAddPage) },
  { path: 'expenses', loadComponent: () => import('./pages/expenses/expenses.page').then(m => m.ExpensesPage) },
  { path: 'expenses/add', loadComponent: () => import('./pages/expenses-add/expenses-add.page').then(m => m.ExpensesAddPage) },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPage) },
  { path: 'statistics', loadComponent: () => import('./pages/statistics/statistics.page').then(m => m.StatisticsPage) },
  { path: '**', redirectTo: 'dashboard' } // Route par défaut pour gérer les erreurs 404
];