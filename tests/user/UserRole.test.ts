import NotificationServiceSlack from '../../src/notification/NotificationServiceSlack'
import SlackService from '../../src/notification/external/SlackService'
import UserFactory from '../../src/user/UserFactory'

jest.mock('../../src/backlogItem/ActivityLeaf')
jest.mock('../../src/notification/NotificationServiceSlack')
jest.mock('../../src/notification/external/SlackService')

describe('UserRole', () => {
	it('perform task on user with role ScrumMaster', () => {
		const spy = jest.spyOn(console, 'log')

		const scrumMaster = new UserFactory().createUser(
			'Kees Boom',
			'ScrumMaster',
			new NotificationServiceSlack(new SlackService())
		)

		scrumMaster.performTask()

		expect(spy).toHaveBeenCalledWith('ScrumMaster performing task')
	})

	it('perform task on user with role Developer', () => {
		const spy = jest.spyOn(console, 'log')

		const scrumMaster = new UserFactory().createUser(
			'Kees Boom',
			'Developer',
			new NotificationServiceSlack(new SlackService())
		)

		scrumMaster.performTask()

		expect(spy).toHaveBeenCalledWith('Developer performing task')
	})
})
