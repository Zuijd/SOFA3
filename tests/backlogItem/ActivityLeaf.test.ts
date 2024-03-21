import ActivityLeaf from '../../src/backlogItem/ActivityLeaf'
import BacklogItemComposite from '../../src/backlogItem/BacklogItemComposite'
import NotificationServiceSlack from '../../src/notification/NotificationServiceSlack'
import SlackService from '../../src/notification/external/SlackService'
import User from '../../src/user/User'
import UserFactory from '../../src/user/UserFactory'

jest.mock('../../src/notification/NotificationServiceSlack')
jest.mock('../../src/notification/external/SlackService')
jest.mock('../../src/user/User')
jest.mock('../../src/user/UserFactory')

describe('ActivitLeaf', () => {
	let backlogItem: BacklogItemComposite
	let activity: ActivityLeaf
	let user: User

	beforeEach(() => {
		jest.clearAllMocks()

		backlogItem = new BacklogItemComposite('Test User Story', 1)
		activity = new ActivityLeaf('Test Activity', 1)
		user = new UserFactory().createUser(
			'Kees Boom',
			'ScrumMaster',
			new NotificationServiceSlack(new SlackService())
		)
	})

	it('should throw an error when adding sub activity to an activity', () => {
		// act
		const act = () => activity.addActivity()

		// assert
		expect(act).toThrow('activity cannot have activities.')
	})

	it('should throw an error when removing sub activity to an activity', () => {
		// act
		const act = () => activity.removeActivity()

		// assert
		expect(act).toThrow('activity cannot have activities.')
	})

	it('should throw an error when setting sub activity to an activity', () => {
		// act
		const act = () => activity.setActivities()

		// assert
		expect(act).toThrow('activity cannot have activities.')
	})

	it('should throw an error when getting sub activity of an activity', () => {
		// act
		const act = () => activity.getActivities()

		// assert
		expect(act).toThrow('activity cannot have activities.')
	})

	it('should assign an user to an activityLeaf', () => {
		// arrange
		const logSpy = jest.spyOn(console, 'log')
		const functionSpy = jest.spyOn(activity, 'assignUser')

		// act
		activity.assignUser(user)

		// assert
		expect(logSpy).toHaveBeenCalledWith(`[INTERNAL] ${user?.name} is assigned to activity: ${activity.userStory}`)
		expect(logSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenCalledWith(user)
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(activity.user).toBe(user)
	})

	it('should dissmiss an user to an activityLeaf', () => {
		// arrange
		const logSpy = jest.spyOn(console, 'log')
		const functionSpy = jest.spyOn(activity, 'dismissUser')

		// act
		activity.dismissUser()

		// assert
		expect(logSpy).toHaveBeenCalledWith(`[INTERNAL] ${user?.name} is dismissed of activity: ${activity.userStory}`)
		expect(logSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(activity.user).toBeUndefined()
	})
})
