import IProgressionState from './IProgressionState'

export default class ProgressionStateDone implements IProgressionState {
	private generalResponse(): void {
		console.log('Backlog item is already done')
	}

	advance(): void {
		this.generalResponse()
	}
	cancel(): void {
		this.generalResponse()
	}
	decline(): void {
		this.generalResponse()
	}
}
