import IProgressionState from './IProgressionState'

export default class ProgressionStateTodo implements IProgressionState {
	handle(): void {
		console.log('Activity is Todo')
	}
}
