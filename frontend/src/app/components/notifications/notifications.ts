import { Component, inject } from '@angular/core';
import { NotificationsService } from '../../services/notifications/notifications-service';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
    notificationsService = inject(NotificationsService);
    onDelete(id: number) {
        // (click)="onDelete($event)"
        this.notificationsService.removeNotification(id);
    }
}
