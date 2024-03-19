import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateDoing from './ProgressionStateDoing'

export default class ProgressionStateTodo implements IProgressionState {
	setToToDo(): void {
		throw new Error('It is not possible to set a task to "To Do" when it is already "To Do".')
	}

	setToDoing(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateDoing())
		backlogItem.notify('Task is now "Doing"')
	}

	setToReadyForTesting(): void {
		throw new Error('It is not possible to set a task to "Ready for Testing" when it is "To Do".')
	}

	setToTesting(): void {
		throw new Error('It is not possible to set a task to "Testing" when it is "To Do".')
	}

	setToTested(): void {
		throw new Error('It is not possible to set a task to "Tested" when it is "To Do".')
	}

	setToDone(): void {
		throw new Error('It is not possible to set a task to "Done" when it is "To Do".')
	}
}
