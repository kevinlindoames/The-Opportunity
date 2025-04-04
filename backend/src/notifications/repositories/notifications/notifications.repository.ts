import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Notification,
  NotificationDocument,
} from '../../entities/notification/notification';
import { CreateNotificationDto } from '../../dto/create-notification/create-notification';

@Injectable()
export class NotificationsRepository {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
  ) {}

  async findByUser(userId: string, onlyUnread: boolean = false) {
    const query: any = { userId };

    if (onlyUnread) {
      query.read = false;
    }

    return this.notificationModel
      .find(query)
      .sort({ createdAt: -1 })
      .populate('opportunityId', 'code title')
      .exec();
  }

  async create(createNotificationDto: CreateNotificationDto) {
    const newNotification = new this.notificationModel(createNotificationDto);
    return newNotification.save();
  }

  async markAsRead(notificationId: string, userId: string) {
    return this.notificationModel
      .findOneAndUpdate(
        { _id: notificationId, userId },
        { read: true },
        { new: true },
      )
      .exec();
  }

  async markAllAsRead(userId: string) {
    return this.notificationModel
      .updateMany({ userId, read: false }, { read: true })
      .exec();
  }
}
