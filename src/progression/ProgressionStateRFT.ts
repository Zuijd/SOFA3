import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateTesting from './ProgressionStateTesting'

export default class ProgressionStateRFT implements IProgressionState {
	setToToDo(): void {
		throw new Error('It is not possible to set a task to "To Do" when it is "Ready for Testing')
	}
	setToDoing(): void {
		throw new Error('It is not possible to set a task to "Doing" when it is "Ready for Testing"')
	}
	setToReadyForTesting(): void {
		throw new Error(
			'It is not possible to set a task to "Ready for Testing" when it is already "Ready for Testing"'
		)
	}
	setToTesting(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateTesting())
		backlogItem.notify('Task is now "Testing"')
	}
	setToTested(): void {
		throw new Error('It is not possible to set a task to "Tested" when it is "Ready for Testing"')
	}
	setToDone(): void {
		throw new Error('It is not possible to set a task to "Done" when it is "Ready for Testing"')
	}
}
