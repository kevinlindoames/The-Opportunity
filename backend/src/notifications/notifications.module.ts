import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema } from './entities/notification/notification';
import { NotificationsController } from './controllers/notifications/notifications.controller';
import { NotificationsRepository } from './repositories/notifications/notifications.repository';
import { NotificationsService } from './services/notifications/notifications.service';
import { Notification } from 'src/notifications/entities/notification/notification';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, NotificationsRepository],
  exports: [NotificationsService],
})
export class NotificationsModule {}
