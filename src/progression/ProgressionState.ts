import BacklogItem from '../BacklogItem'

export default abstract class ProgressionState {
	backlogItem: BacklogItem

	constructor(backlogItem: BacklogItem) {
		this.backlogItem = backlogItem
	}

	abstract advance(): void
	abstract cancel(): void
	abstract decline(): void
}
