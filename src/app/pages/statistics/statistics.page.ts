import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts'; // Import pour les graphiques
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [IonicModule, CommonModule, NgChartsModule], // Ajoute NgChartsModule
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage {
  // Configuration du premier graphique (Bar - Enfants Parrainés)
  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        data: [50, 60, 70, 80, 90, 100],
        label: 'Enfants Parrainés',
        backgroundColor: 'rgba(76, 175, 80, 0.7)',
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1,
      },
    ],
  };
  public barChartOptions: ChartConfiguration['options'] = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Configuration du second graphique (Line - Fonds Reçus)
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        data: [500000, 600000, 750000, 800000, 900000, 1000000],
        label: 'Fonds (FCFA)',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
}