import IProgressionState from './IProgressionState'

export default class ProgressionStateTesting implements IProgressionState {
	handle(): void {
		console.log('Testing the activity')
	}
}
