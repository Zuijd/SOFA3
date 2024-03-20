import Project from '../src/Project'
import BacklogItemComponent from '../src/backlogItem/BacklogItemComponent'
import BacklogItemComposite from '../src/backlogItem/BacklogItemComposite'
import Sprint from '../src/sprint/Sprint'
import ReviewSprint from '../src/sprint/ReviewSprint'
import { SprintStatus } from '../src/sprint/SprintStatus'

jest.mock('../src/backlogItem/BacklogItemComponent')
jest.mock('../src/backlogItem/BacklogItemComposite')
jest.mock('../src/sprint/Sprint')
jest.mock('../src/sprint/ReviewSprint')
jest.mock('../src/sprint/SprintStatus')

describe('Project', () => {
	//arrange
	let project: Project
	let backlogItem: BacklogItemComponent
	let sprint: Sprint

	beforeEach(() => {
		jest.clearAllMocks()
		project = new Project('Test Project', 'Definition of Done')
		backlogItem = new BacklogItemComposite('Test Backlog Item', 1)
		sprint = new ReviewSprint('Test Sprint', new Date('2021-01-01'), new Date('2021-01-14'), SprintStatus.CONCEPT)
	})
	it('should add a backlog item', () => {
		//arrange
		const spy = jest.spyOn(project, 'addBacklogItem')

		//act
		project.addBacklogItem(backlogItem)

		//assert
		expect(spy).toHaveBeenCalledWith(backlogItem)
		expect(spy).toHaveBeenCalledTimes(1)
		expect(project.backlog).toHaveLength(1)
		expect(project.backlog).toContain(backlogItem)
	})

	it('should remove a backlog item', () => {
		//arrange
		const spy = jest.spyOn(project, 'removeBacklogItem')
		project.addBacklogItem(backlogItem)
		expect(project.backlog).toContain(backlogItem)
		expect(project.backlog).toHaveLength(1)

		//act
		project.removeBacklogItem(backlogItem)

		//assert
		expect(spy).toHaveBeenCalledWith(backlogItem)
		expect(spy).toHaveBeenCalledTimes(1)
		expect(project.backlog).toHaveLength(0)
		expect(project.backlog).not.toContain(backlogItem)
	})

	it('should add a sprint', () => {
		//arrange
		const spy = jest.spyOn(project, 'addSprint')

		//act
		project.addSprint(sprint)

		//assert
		expect(spy).toHaveBeenCalledWith(sprint)
		expect(spy).toHaveBeenCalledTimes(1)
		expect(project.sprints).toHaveLength(1)
		expect(project.sprints).toContain(sprint)
	})

	it('should remove a sprint', () => {
		//arrange
		const spy = jest.spyOn(project, 'removeSprint')
		project.addSprint(sprint)
		expect(project.sprints).toContain(sprint)
		expect(project.sprints).toHaveLength(1)

		//act
		project.removeSprint(sprint)

		//assert
		expect(spy).toHaveBeenCalledWith(sprint)
		expect(spy).toHaveBeenCalledTimes(1)
		expect(project.sprints).toHaveLength(0)
		expect(project.sprints).not.toContain(sprint)
	})

	it('should display sprints', () => {
		//arrange
		const logSpy = jest.spyOn(console, 'log')
		const functionSpy = jest.spyOn(project, 'displaySprints')
		project.addSprint(sprint)
		expect(project.sprints).toContain(sprint)

		//act
		project.displaySprints()

		//assert
		expect(logSpy).toHaveBeenCalledWith(sprint)
		expect(logSpy).toHaveBeenCalledTimes(1)
		expect(functionSpy).toHaveBeenCalledTimes(1)
	})
})
