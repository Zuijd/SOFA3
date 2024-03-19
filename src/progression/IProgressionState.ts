import BacklogItem from '../BacklogItem'

export default interface IProgressionState {
	advance(backlogItem: BacklogItem): void
	cancel(backlogItem: BacklogItem): void
	decline(backlogItem: BacklogItem): void
}
