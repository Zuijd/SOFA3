import ProgressionState from './ProgressionState'

export default class ProgressionStateDone extends ProgressionState {
	private generalResponse(): void {
		this.backlogItem.notify('Backlog item is already done')
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
