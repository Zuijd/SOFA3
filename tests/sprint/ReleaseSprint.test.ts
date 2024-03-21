import BacklogItemComposite from '../../src/backlogItem/BacklogItemComposite'
import Report from '../../src/report/Report'
import StyleItem from '../../src/report/StyleItem'
import ReleaseSprint from '../../src/sprint/ReleaseSprint'
import { SprintStatus } from '../../src/sprint/SprintStatus'

describe('ReleaseSprint', () => {
	let releaseSprint: ReleaseSprint
	let backlogItem1: BacklogItemComposite
	let backlogItem2: BacklogItemComposite

	beforeEach(() => {
		releaseSprint = new ReleaseSprint(
			'Sprint 1',
			new Date('2022-01-01'),
			new Date('2022-01-14'),
			SprintStatus.INPROGRESS
		)
		backlogItem1 = new BacklogItemComposite('Test User Story', 1)
		backlogItem2 = new BacklogItemComposite('Test User Story2', 1)
	})

	it('should set and get report correctly', () => {
		const report = new Report(10, [], new StyleItem(), new StyleItem())
		releaseSprint.setReport(report)
		expect(releaseSprint.getReport()).toEqual(report)
	})

	it('should add and retrieve backlog items correctly', () => {
		releaseSprint.addBacklogItem(backlogItem1)
		releaseSprint.addBacklogItem(backlogItem2)

		const backlogItems = releaseSprint.backlogItems

		expect(backlogItems).toContain(backlogItem1)
		expect(backlogItems).toContain(backlogItem2)
		expect(backlogItems).toHaveLength(2)
	})

	it('should add and retrieve backlog items correctly', () => {
		releaseSprint.addBacklogItem(backlogItem1)
		releaseSprint.removeBacklogItem(backlogItem2)

		const backlogItems = releaseSprint.backlogItems

		expect(backlogItems).toContain(backlogItem1)
		expect(backlogItems).not.toContain(backlogItem2)
		expect(backlogItems).toHaveLength(1)
	})
})
