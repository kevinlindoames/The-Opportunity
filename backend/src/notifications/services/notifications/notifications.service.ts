import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from 'src/notifications/dto/create-notification/create-notification';
import { NotificationsRepository } from 'src/notifications/repositories/notifications/notifications.repository';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async findByUser(userId: string, onlyUnread: boolean = false) {
    return this.notificationsRepository.findByUser(userId, onlyUnread);
  }

  async create(createNotificationDto: CreateNotificationDto) {
    return this.notificationsRepository.create(createNotificationDto);
  }

  async markAsRead(notificationId: string, userId: string) {
    const notification = await this.notificationsRepository.markAsRead(
      notificationId,
      userId,
    );
    if (!notification) {
      throw new NotFoundException(
        `Notification not found or not owned by user`,
      );
    }
    return notification;
  }

  async markAllAsRead(userId: string) {
    return this.notificationsRepository.markAllAsRead(userId);
  }
}
