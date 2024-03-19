import chalk from 'chalk'
import Activity from './src/Activity'
import BacklogItem from './src/BacklogItem'
import Project from './src/Project'
import NotificationServiceEmail from './src/notification/NotificationServiceEmail'
import NotificationServiceSlack from './src/notification/NotificationServiceSlack'
import EmailService from './src/notification/external/EmailService'
import SlackService from './src/notification/external/SlackService'
import ReviewSprint from './src/sprint/ReviewSprint'
import { SprintStatus } from './src/sprint/SprintStatus'
import UserScrumMaster from './src/user/UserScrumMaster'
import UserTester from './src/user/UserTester'
import UserDeveloper from './src/user/userDeveloper'

console.log(chalk.red.bold.underline('--- Avans DevOps Started ---\n'))

const project = new Project(
	'Avans DevOps',
	'Definition of Done: Code is written, reviewed and tested. It is integrated in the main branch and deployed to production.'
)

const sprint1 = new ReviewSprint('Sprint 1', new Date('2024-03-19'), new Date('2024-04-02'), SprintStatus.CONCEPT)

const singleNotificationService = new NotificationServiceSlack(new SlackService())
const multipleNotificationServices = [
	new NotificationServiceSlack(new SlackService()),
	new NotificationServiceEmail(new EmailService()),
]

const scrumMaster = new UserScrumMaster('Kees Boom', multipleNotificationServices)
const leadDeveloper = new UserTester('Ryan Scope', multipleNotificationServices)
const developer = new UserDeveloper('John Doe', singleNotificationService)
const developer2 = new UserDeveloper('Henk Keesmaat', singleNotificationService)
const tester = new UserTester('Hans Boom', singleNotificationService)

const activity1 = new Activity('Create a new component', 3)
const activity2 = new Activity('Create a new service', 2)
activity1.assignUser(leadDeveloper)
activity2.assignUser(developer2)

const backlogItemWithActivity = new BacklogItem('Create a new feature', 5, [activity1, activity2])

const backlogItems = [
	backlogItemWithActivity,
	new BacklogItem('Create a new feature1', 5),
	new BacklogItem('Create a new feature2', 5),
	new BacklogItem('Create a new feature3', 5),
	new BacklogItem('Create a new feature4', 5),
	new BacklogItem('Create a new feature5', 5),
	new BacklogItem('Create a new feature6', 5),
	new BacklogItem('Create a new feature7', 5),
	new BacklogItem('Create a new feature8', 5),
	new BacklogItem('Create a new feature9', 5),
	new BacklogItem('Create a new feature10', 5),
]

for (const backlogItem of backlogItems) {
	backlogItem.assignUser(developer)
	project.addBacklogItem(backlogItem)
}

backlogItemWithActivity.attach(developer)
backlogItemWithActivity.progression.advance()
backlogItemWithActivity.progression.advance()
backlogItemWithActivity.progression.advance()
backlogItemWithActivity.progression.advance()
backlogItemWithActivity.progression.advance()
backlogItemWithActivity.progression.advance()
