import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonButton,
  IonIcon,
  IonBadge,
  IonPopover,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  ToastController
} from '@ionic/angular/standalone';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { addIcons } from 'ionicons';
import { peopleOutline, cashOutline, documentTextOutline, barChartOutline, flashOutline, notificationsOutline, mailUnreadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonBadge,
    IonPopover,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    CommonModule,
    FormsModule,
    RouterModule,
    NgChartsModule
  ]
})
export class DashboardPage implements OnInit {
  userName: string = 'Association Éducation';

  // Données statistiques
  statistics = {
    children: 150,
    totalFunds: 2500000,
    reports: 45,
    monthlyChildren: [50, 60, 70, 80, 90, 100],
    monthlyFunds: [500000, 600000, 750000, 800000, 900000, 1000000],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin']
  };

  // Données des notifications
  messages = [
    { id: 1, title: 'Nouveau parrainage', content: 'Un nouvel enfant a été parrainé.', timestamp: new Date('2025-09-23T10:00:00'), read: false },
    { id: 2, title: 'Paiement reçu', content: 'Paiement de 500,000 FCFA reçu.', timestamp: new Date('2025-09-22T15:30:00'), read: false },
    { id: 3, title: 'Rapport envoyé', content: 'Le rapport mensuel a été envoyé aux parrains.', timestamp: new Date('2025-09-21T09:00:00'), read: true }
  ];

  unreadMessages: number = this.messages.filter(msg => !msg.read).length;

  // Configuration du graphique pour Enfants Parrainés (Bar)
  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration['data'] = {
    labels: this.statistics.months,
    datasets: [
      {
        data: this.statistics.monthlyChildren,
        label: 'Enfants Parrainés',
        backgroundColor: 'rgba(46, 204, 113, 0.7)', // Vert vif #2ECC71
        borderColor: 'rgba(46, 204, 113, 1)',
        borderWidth: 1
      }
    ]
  };
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
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
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    }
  };

  // Configuration du graphique pour Fonds Reçus (Line)
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartConfiguration['data'] = {
    labels: this.statistics.months,
    datasets: [
      {
        data: this.statistics.monthlyFunds,
        label: 'Fonds (FCFA)',
        backgroundColor: 'rgba(2, 136, 209, 0.2)', // Bleu clair #0288D1
        borderColor: 'rgba(2, 136, 209, 1)',
        borderWidth: 2,
        fill: true
      }
    ]
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
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    }
  };

  constructor(private toastController: ToastController) {
    addIcons({ peopleOutline, cashOutline, documentTextOutline, barChartOutline, flashOutline, notificationsOutline, mailUnreadOutline });
  }

  ngOnInit() {
    // TODO: Récupérer les données depuis le backend
    // Exemple avec un service :
    // this.dashboardService.getStats().subscribe(data => {
    //   this.statistics = data;
    //   this.barChartData.datasets[0].data = data.monthlyChildren;
    //   this.lineChartData.datasets[0].data = data.monthlyFunds;
    //   this.barChartData.labels = data.months;
    //   this.lineChartData.labels = data.months;
    // });
    // this.notificationService.getMessages().subscribe(messages => {
    //   this.messages = messages;
    //   this.unreadMessages = this.messages.filter(msg => !msg.read).length;
    // });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
  }

  markAsRead(message: any) {
    if (!message.read) {
      message.read = true;
      this.unreadMessages = this.messages.filter(msg => !msg.read).length;
    }
  }
}