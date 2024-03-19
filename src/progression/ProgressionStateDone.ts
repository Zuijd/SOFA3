import IProgressionState from './IProgressionState'

export default class ProgressionStateDone implements IProgressionState {
	setToToDo(): void {
		throw new Error('Item is already done. Cannot set to "To Do"')
	}
	setToDoing(): void {
		throw new Error('Item is already done. Cannot set to "Doing"')
	}
	setToReadyForTesting(): void {
		throw new Error('Item is already done. Cannot set to "Ready for Testing"')
	}
	setToTesting(): void {
		throw new Error('Item is already done. Cannot set to "Testing"')
	}
	setToTested(): void {
		throw new Error('Item is already done. Cannot set to "Tested"')
	}
	setToDone(): void {
		throw new Error('Item is already done. Cannot set to "Done"')
	}
}
