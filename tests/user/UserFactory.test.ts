import NotificationServiceSlack from '../../src/notification/NotificationServiceSlack'
import SlackService from '../../src/notification/external/SlackService'
import UserFactory from '../../src/user/UserFactory'
import Developer from '../../src/user/role/Developer'
import LeadDeveloper from '../../src/user/role/LeadDeveloper'
import ScrumMaster from '../../src/user/role/ScrumMaster'
import Tester from '../../src/user/role/Tester'

jest.mock('../../src/backlogItem/ActivityLeaf')
jest.mock('../../src/notification/NotificationServiceSlack')
jest.mock('../../src/notification/external/SlackService')

describe('UserFactory', () => {
	it('check if the created user.role is of instance ScrumMaster', () => {
		const scrumMaster = new UserFactory().createUser(
			'Kees Boom',
			'ScrumMaster',
			new NotificationServiceSlack(new SlackService())
		)

		expect(scrumMaster.role).toBeInstanceOf(ScrumMaster)
	})

	it('check if the created user.role is of instance Developer', () => {
		const developer = new UserFactory().createUser(
			'Kees Boom',
			'Developer',
			new NotificationServiceSlack(new SlackService())
		)

		expect(developer.role).toBeInstanceOf(Developer)
	})

	it('check if the created user.role is of instance Tester', () => {
		const tester = new UserFactory().createUser(
			'Kees Boom',
			'Tester',
			new NotificationServiceSlack(new SlackService())
		)

		expect(tester.role).toBeInstanceOf(Tester)
	})

	it('check if the created user.role is of instance LeadDeveloper', () => {
		const leadDeveloper = new UserFactory().createUser(
			'Kees Boom',
			'LeadDeveloper',
			new NotificationServiceSlack(new SlackService())
		)

		expect(leadDeveloper.role).toBeInstanceOf(LeadDeveloper)
	})

	it('should throw an error when role is invalid', () => {
		try {
			new UserFactory().createUser('Kees Boom', 'InvalidRole', new NotificationServiceSlack(new SlackService()))
		} catch (error) {
			expect(error).toBeInstanceOf(Error)
			expect(error).toHaveProperty('message', 'Invalid role')
		}
		expect.assertions(2)
	})
})
