import ActivityLeaf from '../../src/backlogItem/ActivityLeaf'
import BacklogItemComposite from '../../src/backlogItem/BacklogItemComposite'
import NotificationServiceSlack from '../../src/notification/NotificationServiceSlack'
import SlackService from '../../src/notification/external/SlackService'
import ProgressionStateDoing from '../../src/progression/ProgressionStateDoing'
import ProgressionStateDone from '../../src/progression/ProgressionStateDone'
import ProgressionStateRFT from '../../src/progression/ProgressionStateRFT'
import ProgressionStateTested from '../../src/progression/ProgressionStateTested'
import ProgressionStateTesting from '../../src/progression/ProgressionStateTesting'
import User from '../../src/user/User'
import UserFactory from '../../src/user/UserFactory'

jest.mock('../../src/backlogItem/ActivityLeaf')
jest.mock('../../src/notification/NotificationServiceSlack')
jest.mock('../../src/notification/external/SlackService')
jest.mock('../../src/user/User')
jest.mock('../../src/user/UserFactory')

describe('BacklogItemComposite', () => {
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

	it('should add an activity', () => {
		// arrange
		const spy = jest.spyOn(backlogItem, 'addActivity')

		// act
		backlogItem.addActivity(activity)

		// assert
		expect(spy).toHaveBeenCalledWith(activity)
		expect(spy).toHaveBeenCalledTimes(1)
		expect(backlogItem.getActivities()).toHaveLength(1)
		expect(backlogItem.getActivities()).toContain(activity)
	})

	it('should remove an activity', () => {
		// arrange
		const spy = jest.spyOn(backlogItem, 'removeActivity')
		backlogItem.addActivity(activity)
		expect(backlogItem.getActivities()).toContain(activity)
		expect(backlogItem.getActivities()).toHaveLength(1)

		// act
		backlogItem.removeActivity(activity)

		// assert
		expect(spy).toHaveBeenCalledWith(activity)
		expect(spy).toHaveBeenCalledTimes(1)
		expect(backlogItem.getActivities()).toHaveLength(0)
		expect(backlogItem.getActivities()).not.toContain(activity)
	})

	it('should assign a user to a backlogItem', () => {
		// arrange
		const logSpy = jest.spyOn(console, 'log')
		const functionSpy = jest.spyOn(backlogItem, 'assignUser')

		// act
		backlogItem.assignUser(user)

		// assert
		expect(logSpy).toHaveBeenCalledWith(
			`[INTERNAL] ${user?.name} is assigned to backlog item: ${backlogItem.userStory}`
		)
		expect(logSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenCalledWith(user)
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(backlogItem.user).toBe(user)
	})

	it('should dismiss an user of a backlogItem', () => {
		// arrange
		const logSpy = jest.spyOn(console, 'log')
		const functionSpy = jest.spyOn(backlogItem, 'dismissUser')
		backlogItem.assignUser(user)
		expect(backlogItem.user).toBe(user)

		// act
		backlogItem.dismissUser()

		// assert
		expect(logSpy).toHaveBeenCalledWith(
			`[INTERNAL] ${user?.name} is dismissed of backlog item: ${backlogItem.userStory}`
		)
		expect(logSpy).toHaveBeenCalledTimes(2)
		expect(functionSpy).toHaveBeenCalledTimes(1)
		expect(backlogItem.user).toBeUndefined()
	})

	it('should advance the progression of a backlogItem', () => {
		// arrange
		const spySetProgression = jest.spyOn(backlogItem, 'setProgression')
		const spyAdvance = jest.spyOn(backlogItem.progression, 'advance')

		// act
		backlogItem.progression.advance()
		backlogItem.progression.advance()
		backlogItem.progression.advance()
		backlogItem.progression.advance()
		backlogItem.progression.advance()

		// assert
		expect(spySetProgression).toHaveBeenCalledTimes(5)
		expect(spyAdvance).toHaveBeenCalledTimes(1) // only 1 time, because new progression state is set each time
	})

	it('should be able to iterate to all progressions of a backlogItem using setProgression', () => {
		// arrange
		const spySetProgression = jest.spyOn(backlogItem, 'setProgression')

		// act
		backlogItem.setProgression(new ProgressionStateDoing(backlogItem))
		backlogItem.setProgression(new ProgressionStateRFT(backlogItem))
		backlogItem.setProgression(new ProgressionStateTesting(backlogItem))
		backlogItem.setProgression(new ProgressionStateTested(backlogItem))
		backlogItem.setProgression(new ProgressionStateDone(backlogItem))

		// assert
		expect(spySetProgression).toHaveBeenCalledTimes(5)
		expect(backlogItem.progression).toBeInstanceOf(ProgressionStateDone)
	})

	it('when backlogItem on done, it should return a message when trying to change progression', () => {
		// arrange
		backlogItem.setProgression(new ProgressionStateDone(backlogItem))
		const spyAdvance = jest.spyOn(backlogItem.progression, 'advance')
		const spyNotify = jest.spyOn(backlogItem, 'notify')

		// act
		backlogItem.progression.advance()

		// assert
		expect(spyAdvance).toHaveBeenCalledTimes(1)
		expect(spyNotify).toHaveBeenCalledWith('Backlog item is already done')
		expect(spyNotify).toHaveBeenCalledTimes(1)
		expect(backlogItem.progression).toBeInstanceOf(ProgressionStateDone)
	})
})
