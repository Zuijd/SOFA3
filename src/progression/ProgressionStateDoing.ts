import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateRFT from './ProgressionStateRFT'
import ProgressionStateTodo from './ProgressionStateTodo'

export default class ProgressionStateDoing implements IProgressionState {
	advance(backlogItem: BacklogItem): void {
		console.log('Task finshed by developer, advancing to RFT state')
		backlogItem.setProgression(new ProgressionStateRFT())
	}

	cancel(backlogItem: BacklogItem): void {
		console.log('Task cancelled by developer, returning to todo state')
		backlogItem.setProgression(new ProgressionStateTodo())
	}

	decline(): void {
		throw new Error('Backlog item cannot be cancelled while in doing state')
	}
}
