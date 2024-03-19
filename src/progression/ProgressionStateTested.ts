import ProgressionState from './ProgressionState'
import ProgressionStateDone from './ProgressionStateDone'
import ProgressionStateRFT from './ProgressionStateRFT'

export default class ProgressionStateTested extends ProgressionState {
	advance(): void {
		this.backlogItem.notify('Task approved by lead developer, advancing to done state')
		this.backlogItem.setProgression(new ProgressionStateDone(this.backlogItem))
	}

	cancel(): void {
		throw new Error('Backlog item cannot be tested while in tested state')
	}

	decline(): void {
		this.backlogItem.notify('Task declined by lead developer, returning to RFT state')
		this.backlogItem.setProgression(new ProgressionStateRFT(this.backlogItem))
	}
}
