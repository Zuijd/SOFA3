import ProgressionState from './ProgressionState'
import ProgressionStateRFT from './ProgressionStateRFT'
import ProgressionStateTested from './ProgressionStateTested'
import ProgressionStateTodo from './ProgressionStateTodo'

export default class ProgressionStateTesting extends ProgressionState {
	advance(): void {
		this.backlogItem.notify('Task tested by tester, advancing to tested state')
		this.backlogItem.setProgression(new ProgressionStateTested(this.backlogItem))
	}

	cancel(): void {
		this.backlogItem.notify('Task cancelled by tester, returning to RFT state')
		this.backlogItem.setProgression(new ProgressionStateRFT(this.backlogItem))
	}

	decline(): void {
		this.backlogItem.notify('Task declined by tester, returning to todo state')
		this.backlogItem.setProgression(new ProgressionStateTodo(this.backlogItem))
	}
}
