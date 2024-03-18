import INotificationService from './src/service/INotificationService'
import NotificationServiceEmail from './src/service/NotificationServiceEmail'
import NotificationServiceSlack from './src/service/NotificationServiceSlack'
import EmailService from './src/service/external/EmailService'
import SlackService from './src/service/external/SlackService'

const emailService = new EmailService()
const slackService = new SlackService()
let notificationService: INotificationService = new NotificationServiceEmail(emailService)
notificationService.sendNotification('Hello, world!', 'Jens')
notificationService = new NotificationServiceSlack(slackService)
notificationService.sendNotification('Hello, world again!', 'Jens')
