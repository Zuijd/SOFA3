import BacklogItemComponent from '../backlogItem/BacklogItemComponent'
import { SprintStatus } from './SprintStatus'

export default abstract class Sprint {
	name: string
	startDate: Date
	endDate: Date
	status: SprintStatus
	backlogItems: BacklogItemComponent[] = []

	constructor(name: string, startDate: Date, endDate: Date, status: SprintStatus) {
		this.name = name
		this.startDate = startDate
		this.endDate = endDate
		this.status = status
	}

	addBacklogItem(backlogitem: BacklogItemComponent): void {
		this.backlogItems.push(backlogitem)
	}

	removeBacklogItem(backlogitem: BacklogItemComponent): void {
		this.backlogItems = this.backlogItems.filter((item) => item !== backlogitem)
	}
}
