import BacklogItemComposite from '../../src/backlogItem/BacklogItemComposite'
import NotificationServiceSlack from '../../src/notification/NotificationServiceSlack'
import SlackService from '../../src/notification/external/SlackService'
import ThreadComposite from '../../src/thread/ThreadComposite'
import User from '../../src/user/User'
import UserFactory from '../../src/user/UserFactory'

jest.mock('../../src/notification/NotificationServiceSlack')
jest.mock('../../src/notification/external/SlackService')
jest.mock('../../src/user/User')
jest.mock('../../src/user/UserFactory')

describe('Thread', () => {
	let backlogItem: BacklogItemComposite
	let user: User
	let thread: ThreadComposite

	beforeEach(() => {
		jest.clearAllMocks()

		backlogItem = new BacklogItemComposite('Test User Story', 1)
		user = new UserFactory().createUser(
			'Kees Boom',
			'ScrumMaster',
			new NotificationServiceSlack(new SlackService())
		)
		thread = new ThreadComposite('Test Thread', user)
	})

	it('should be able to add thread to backlogItem', () => {
		// arrange
		const functionSpy = jest.spyOn(backlogItem, 'addThread')

		// act
		backlogItem.addThread(thread)

		// assert
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenLastCalledWith(thread)
		expect(backlogItem.threads).toHaveLength(1)
		expect(backlogItem.threads).toContain(thread)
	})

	it('should be able to remove thread from backlogItem', () => {
		// arrange
		const functionSpy = jest.spyOn(backlogItem, 'removeThread')

		// act
		backlogItem.addThread(thread)
		backlogItem.removeThread(thread)

		// assert
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenLastCalledWith(thread)
		expect(backlogItem.threads).toHaveLength(0)
		expect(backlogItem.threads).not.toContain(thread)
	})

	it('should be able to add thread to another thread', () => {
		// arrange
		const functionSpy = jest.spyOn(thread, 'addThread')

		// act
		thread.addThread(thread)

		// assert
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenLastCalledWith(thread)
		expect(thread.threads).toHaveLength(1)
		expect(thread.threads).toContain(thread)
	})

	it('should be able to remove thread from another thread', () => {
		// arrange
		const functionSpy = jest.spyOn(thread, 'removeThread')

		// act
		thread.addThread(thread)
		thread.removeThread(thread)

		// assert
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenLastCalledWith(thread)
		expect(thread.threads).toHaveLength(0)
		expect(thread.threads).not.toContain(thread)
	})

	it('should be able to remove thread from another thread', () => {
		// arrange
		const functionSpy = jest.spyOn(thread, 'getThreads')

		// act
		thread.addThread(thread)
		thread.addThread(thread)
		const result = thread.getThreads()

		// assert
		expect(thread.threads).toHaveLength(2)
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(result).toHaveLength(2)
	})
})
