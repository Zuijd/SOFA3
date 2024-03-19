import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateTested from './ProgressionStateTested'
import ProgressionStateTodo from './ProgressionStateTodo'

export default class ProgressionStateTesting implements IProgressionState {
	setToToDo(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateTodo())
		backlogItem.notify('Task is now "To Do"')
	}
	setToDoing(): void {
		throw new Error('It is not possible to set a task to "Doing" when it is "Testing"')
	}
	setToReadyForTesting(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateTesting())
		backlogItem.notify('Task is now "Ready for Testing"')
	}
	setToTesting(backlogItem: BacklogItem): void {
		throw new Error('It is not possible to set a task to "Testing" when it is already "Testing"')
	}
	setToTested(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateTested())
		backlogItem.notify('Task is now "Tested"')
	}
	setToDone(backlogItem: BacklogItem): void {
		throw new Error('It is not possible to set a task to "Done" when it is "Testing"')
	}
}
