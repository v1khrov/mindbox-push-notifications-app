import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonContent, IonTitle, IonToolbar, IonHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'mindbox-push-notifications-app';
}
