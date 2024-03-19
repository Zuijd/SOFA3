import BacklogItem from '../BacklogItem'
import IProgressionState from './IProgressionState'
import ProgressionStateRFT from './ProgressionStateRFT'
import ProgressionStateTested from './ProgressionStateTested'
import ProgressionStateTodo from './ProgressionStateTodo'

export default class ProgressionStateTesting implements IProgressionState {
	advance(backlogItem: BacklogItem): void {
		console.log('Task tested by tester, advancing to tested state')
		backlogItem.setProgression(new ProgressionStateTested())
	}

	cancel(backlogItem: BacklogItem): void {
		console.log('Task cancelled by tester, returning to RFT state')
		backlogItem.setProgression(new ProgressionStateRFT())
	}

	decline(backlogItem: BacklogItem): void {
		console.log('Task declined by tester, returning to todo state')
		backlogItem.setProgression(new ProgressionStateTodo())
	}
}
