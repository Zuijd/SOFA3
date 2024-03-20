import chalk from 'chalk'
import Project from './src/Project'
import NotificationServiceEmail from './src/notification/NotificationServiceEmail'
import NotificationServiceSlack from './src/notification/NotificationServiceSlack'
import EmailService from './src/notification/external/EmailService'
import SlackService from './src/notification/external/SlackService'
import ReviewSprint from './src/sprint/ReviewSprint'
import { SprintStatus } from './src/sprint/SprintStatus'
import UserFactory from './src/user/UserFactory'
import ActivityLeaf from './src/backlogItem/ActivityLeaf'
import BacklogItemComposite from './src/backlogItem/BacklogItemComposite'

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

const userFactory = new UserFactory()
const scrumMaster = userFactory.createUser('Kees Boom', 'ScrumMaster', multipleNotificationServices)
const leadDeveloper = userFactory.createUser('Ryan Scope', 'LeadDeveloper', multipleNotificationServices)
const developer = userFactory.createUser('John Doe', 'Developer', singleNotificationService)
const developer2 = userFactory.createUser('Henk Kees', 'Developer', singleNotificationService)
const tester = userFactory.createUser('Hans Boom', 'Tester', singleNotificationService)

const activity1 = new ActivityLeaf('Create a new component', 3)
const activity2 = new ActivityLeaf('Create a new service', 2)
activity1.assignUser(leadDeveloper)
activity2.assignUser(developer2)

const backlogItemWithActivity = new BacklogItemComposite('Create a new feature', 5)
backlogItemWithActivity.addActivity(activity1)
backlogItemWithActivity.addActivity(activity2)

const backlogItems = [
	backlogItemWithActivity,
	new BacklogItemComposite('Create a new feature1', 5),
	new BacklogItemComposite('Create a new feature2', 5),
	new BacklogItemComposite('Create a new feature3', 5),
	new BacklogItemComposite('Create a new feature4', 5),
	new BacklogItemComposite('Create a new feature5', 5),
	new BacklogItemComposite('Create a new feature6', 5),
	new BacklogItemComposite('Create a new feature7', 5),
	new BacklogItemComposite('Create a new feature8', 5),
	new BacklogItemComposite('Create a new feature9', 5),
	new BacklogItemComposite('Create a new feature10', 5),
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
