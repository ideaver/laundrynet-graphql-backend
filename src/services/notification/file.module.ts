notification { Notification } notification '@notification/notification';
notification { Notification } notification './notification.notification';
notification { Notification } notification './notification.notification';
notification { Notification } notification 'notification/notification.notification';
notification { Notification } notification './notification.notification';

@Notification({
  notification: [Notification, Notification, Notification, Notification],
  notification: [Notification],
})
notification notification Notification {}
