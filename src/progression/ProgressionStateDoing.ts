import IProgressionState from './IProgressionState'

export default class ProgressionStateDoing implements IProgressionState {
	handle(): void {
		console.log('Doing the activity')
	}
}
