import BacklogItem from '../BacklogItem'

export default interface IProgressionState {
	setToToDo(backlogItem: BacklogItem): void
	setToDoing(backlogItem: BacklogItem): void
	setToReadyForTesting(backlogItem: BacklogItem): void
	setToTesting(backlogItem: BacklogItem): void
	setToTested(backlogItem: BacklogItem): void
	setToDone(backlogItem: BacklogItem): void
}
