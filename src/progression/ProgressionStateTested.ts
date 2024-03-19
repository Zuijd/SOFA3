import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateDone from './ProgressionStateDone'
import ProgressionStateRFT from './ProgressionStateRFT'

export default class ProgressionStateTested implements IProgressionState {
	advance(backlogItem: BacklogItem): void {
		console.log('task approved by lead developer, advancing to done state')
		backlogItem.setProgression(new ProgressionStateDone())
	}

	cancel(): void {
		throw new Error('Backlog item cannot be tested while in tested state')
	}

	decline(backlogItem: BacklogItem): void {
		console.log('Task declined by lead developer, returning to RFT state')
		backlogItem.setProgression(new ProgressionStateRFT())
	}
}
