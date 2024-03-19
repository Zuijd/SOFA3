import BacklogItemComponent from '../backlogItem/BacklogItemComponent'

export default abstract class ProgressionState {
	backlogItem: BacklogItemComponent

	constructor(backlogItem: BacklogItemComponent) {
		this.backlogItem = backlogItem
	}

	abstract advance(): void
	abstract cancel(): void
	abstract decline(): void
}
