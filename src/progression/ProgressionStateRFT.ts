import ProgressionState from './ProgressionState'
import ProgressionStateTesting from './ProgressionStateTesting'

export default class ProgressionStateRFT extends ProgressionState {
	advance(): void {
		this.backlogItem.notify('Tester taken on task, advancing to testing state')
		this.backlogItem.setProgression(new ProgressionStateTesting(this.backlogItem))
	}

	cancel(): void {
		throw new Error('Backlog item cannot be cancelled while in RFT state')
	}

	decline(): void {
		throw new Error('Backlog item cannot be cancelled while in RFT state')
	}
}
