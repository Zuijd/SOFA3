import ProgressionState from './ProgressionState'
import ProgressionStateDoing from './ProgressionStateDoing'

export default class ProgressionStateTodo extends ProgressionState {
	advance(): void {
		this.backlogItem.notify('Task taken on by developer, advancing to doing state')
		this.backlogItem.setProgression(new ProgressionStateDoing(this.backlogItem))
	}

	cancel(): void {
		throw new Error('Backlog item cannot be cancelled while in todo state')
	}

	decline(): void {
		throw new Error('Backlog item cannot be declined while in todo state')
	}
}
