import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateDoing from './ProgressionStateDoing'

export default class ProgressionStateTodo implements IProgressionState {
	advance(backlogItem: BacklogItem): void {
		console.log('Task taken on by developer, advancing to doing state')
		backlogItem.setProgression(new ProgressionStateDoing())
	}

	cancel(): void {
		throw new Error('Backlog item cannot be cancelled while in todo state')
	}

	decline(): void {
		throw new Error('Backlog item cannot be declined while in todo state')
	}
}
