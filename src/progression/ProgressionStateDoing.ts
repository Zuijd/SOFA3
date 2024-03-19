import ProgressionState from './ProgressionState'
import ProgressionStateRFT from './ProgressionStateRFT'
import ProgressionStateTodo from './ProgressionStateTodo'

export default class ProgressionStateDoing extends ProgressionState {
	advance(): void {
		this.backlogItem.notify('Task finshed by developer, advancing to RFT state')
		this.backlogItem.setProgression(new ProgressionStateRFT(this.backlogItem))
	}

	cancel(): void {
		this.backlogItem.notify('Task cancelled by developer, returning to todo state')
		this.backlogItem.setProgression(new ProgressionStateTodo(this.backlogItem))
	}

	decline(): void {
		throw new Error('Backlog item cannot be cancelled while in doing state')
	}
}
