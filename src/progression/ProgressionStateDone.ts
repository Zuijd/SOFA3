import IProgressionState from './IProgressionState'

export default class ProgressionStateDone implements IProgressionState {
	handle(): void {
		console.log('Activity done')
	}
}
