import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateDone from './ProgressionStateDone'
import ProgressionStateRFT from './ProgressionStateRFT'

export default class ProgressionStateTested implements IProgressionState {
	setToToDo(backlogItem: BacklogItem): void {
		throw new Error('It is not possible to set a task to "To Do" when it is "Tested"')
	}
	setToDoing(backlogItem: BacklogItem): void {
		throw new Error('It is not possible to set a task to "Doing" when it is "Tested"')
	}
	setToReadyForTesting(backlogItem: BacklogItem): void {
		backlogItem.setState(new ProgressionStateRFT())
		backlogItem.notify('Task is now "Ready for Testing"')
	}
	setToTesting(backlogItem: BacklogItem): void {
		throw new Error('It is not possible to set a task to "Testing" when it is "Tested"')
	}
	setToTested(backlogItem: BacklogItem): void {
		throw new Error('It is not possible to set a task to "Tested" when it is "Tested"')
	}
	setToDone(backlogItem: BacklogItem): void {
		if (
			backlogItem.activities.filter((activity) => activity.progression.constructor === ProgressionStateDone)
				.length !== backlogItem.activities.length
		) {
			throw new Error('It is not possible to set a task to "Done" when there are activities not done')
		}

		backlogItem.setState(new ProgressionStateDone())
		backlogItem.notify('Task is now "Done"')
	}
}
