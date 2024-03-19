import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateRFT from './ProgressionStateRFT'
import ProgressionStateTodo from './ProgressionStateTodo'

export default class ProgressionStateDoing implements IProgressionState {
	setToToDo(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateTodo())
		backlogItem.notify('Task is now "To Do"')
	}

	setToDoing(): void {
		throw new Error('It is not possible to set a task to "Doing" when it is already "Doing"')
	}

	setToReadyForTesting(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateRFT())
		backlogItem.notify('Task is now "Ready for Testing"')
	}

	setToTesting(): void {
		throw new Error('It is not possible to set a task to "Testing" when it is "Doing"')
	}

	setToTested(): void {
		throw new Error('It is not possible to set a task to "Tested" when it is "Doing"')
	}

	setToDone(): void {
		throw new Error('It is not possible to set a task to "Done" when it is "Doing"')
	}
}
