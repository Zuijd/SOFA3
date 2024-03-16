import IProgressionState from './IProgressionState'

export default class ProgressionStateRFT implements IProgressionState {
	handle(): void {
		console.log('Activity Ready for testing')
	}
}
