import Activity from './src/Activity'
import BacklogItem from './src/BacklogItem'
import NotificationServiceEmail from './src/notification/NotificationServiceEmail'
import NotificationServiceSlack from './src/notification/NotificationServiceSlack'
import EmailService from './src/notification/external/EmailService'
import SlackService from './src/notification/external/SlackService'
import UserDeveloper from './src/user/userDeveloper'

// --- Observable pattern Example ---
const singleNotificationService = new NotificationServiceSlack(new SlackService())
const multipleNotificationServices = [
	new NotificationServiceSlack(new SlackService()),
	new NotificationServiceEmail(new EmailService()),
]

const johnDoe = new UserDeveloper('John Doe', singleNotificationService)
const hansBoom = new UserDeveloper('Hans Boom', multipleNotificationServices)
const backlogItem = new BacklogItem('Create a new feature', 5)

backlogItem.attach(johnDoe)
backlogItem.attach(hansBoom)

backlogItem.addActivity(new Activity('Create a new component', 3))
// --- Observable pattern Example ---
