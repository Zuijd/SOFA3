import BacklogItemComposite from '../../src/backlogItem/BacklogItemComposite'
import NotificationServiceSlack from '../../src/notification/NotificationServiceSlack'
import SlackService from '../../src/notification/external/SlackService'
import User from '../../src/user/User'
import UserFactory from '../../src/user/UserFactory'

jest.mock('../../src/notification/NotificationServiceSlack')
jest.mock('../../src/notification/external/SlackService')

describe('Subject', () => {
	let subject: BacklogItemComposite
	let observer1: User
	let observer2: User

	beforeEach(() => {
		subject = new BacklogItemComposite('Test User Story', 1)
		observer1 = new UserFactory().createUser(
			'Kees Boom',
			'ScrumMaster',
			new NotificationServiceSlack(new SlackService())
		)
		observer2 = new UserFactory().createUser(
			'Kees Boom',
			'ScrumMaster',
			new NotificationServiceSlack(new SlackService())
		)
	})

	it('should attach an observer', () => {
		// act
		subject.attach(observer1)

		// assert
		expect(subject.getObservers()).toContain(observer1)
	})

	it('should detach an observer', () => {
		// act
		subject.attach(observer1)
		subject.attach(observer2)
		subject.detach(observer1)

		// assert
		expect(subject.getObservers()).not.toContain(observer1)
		expect(subject.getObservers()).toContain(observer2)
	})

	it('should notify all observers', () => {
		// arrange
		subject.attach(observer1)
		subject.attach(observer2)
		const spyNotifyObserver1 = jest.spyOn(observer1, 'notify')
		const spyNotifyObserver2 = jest.spyOn(observer2, 'notify')

		// act
		const message = 'Hello, observers!'
		subject.notify(message)

		// assert
		expect(spyNotifyObserver1).toHaveBeenCalledWith(message)
		expect(spyNotifyObserver2).toHaveBeenCalledWith(message)
	})
})
