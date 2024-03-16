import IProgressionState from './IProgressionState'

export default class ProgressionStateTested implements IProgressionState {
	handle(): void {
		console.log('Tested the activity')
	}
}
