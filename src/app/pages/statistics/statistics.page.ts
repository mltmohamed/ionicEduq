import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/angular/standalone';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    CommonModule, 
    NgChartsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
  ],
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  // Configuration du premier graphique (Bar - Enfants Parrainés)
  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        data: [50, 60, 70, 80, 90, 100],
        label: 'Enfants Parrainés',
        backgroundColor: 'rgba(46, 204, 113, 0.7)', // Vert vif #2ECC71
        borderColor: 'rgba(46, 204, 113, 1)',
        borderWidth: 1,
      },
    ],
  };
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false, // Permet un meilleur contrôle de la taille
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Nombre d\'enfants'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Mois'
        }
      }
    },
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    }
  };

  // Configuration du second graphique (Line - Fonds Reçus)
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        data: [500000, 600000, 750000, 800000, 900000, 1000000],
        label: 'Fonds (FCFA)',
        backgroundColor: 'rgba(2, 136, 209, 0.2)', // Bleu clair #0288D1
        borderColor: 'rgba(2, 136, 209, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Fonds (FCFA)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Mois'
        }
      }
    },
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    }
  };

  constructor() {}

  ngOnInit() {
    // TODO: Récupérer les données depuis le backend
    // Exemple avec un service :
    // this.statisticsService.getStats().subscribe(data => {
    //   this.barChartData.datasets[0].data = data.monthlyChildren;
    //   this.lineChartData.datasets[0].data = data.monthlyFunds;
    //   this.barChartData.labels = data.months;
    //   this.lineChartData.labels = data.months;
    // });
  }
}