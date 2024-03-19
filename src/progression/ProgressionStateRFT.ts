import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateTesting from './ProgressionStateTesting'

export default class ProgressionStateRFT implements IProgressionState {
	advance(backlogItem: BacklogItem): void {
		console.log('Tester taken on task, advancing to testing state')
		backlogItem.setProgression(new ProgressionStateTesting())
	}

	cancel(): void {
		throw new Error('Backlog item cannot be cancelled while in RFT state')
	}

	decline(): void {
		throw new Error('Backlog item cannot be cancelled while in RFT state')
	}
}
