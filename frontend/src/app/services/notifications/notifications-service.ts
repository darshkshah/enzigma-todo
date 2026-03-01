import { Injectable, signal } from '@angular/core';
import { AppNotification } from '../../models/app-notification.model';

@Injectable({
    providedIn: 'root',
})
export class NotificationsService {
    notifications = signal<AppNotification[]>([])

    addNotification(title: string, content: string):number {
        const id = Math.floor(Math.random() * 1000000);
        this.notifications.update(current => [...current, {id, title, content}])
        return id;
    }

    removeNotification(id: number) {
        this.notifications.update(current =>
            current.filter(notification => notification.id !== id)
        )
    }
}
