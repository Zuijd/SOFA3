import BacklogItem from '../BacklogItem'
import { SprintStatus } from './SprintStatus'

export default abstract class Sprint {
	name: string
	startDate: Date
	endDate: Date
	status: SprintStatus
	backlogItems: BacklogItem[] = []

	constructor(name: string, startDate: Date, endDate: Date, status: SprintStatus) {
		this.name = name
		this.startDate = startDate
		this.endDate = endDate
		this.status = status
	}

	addBacklogItem(backlogitem: BacklogItem): void {
		this.backlogItems.push(backlogitem)
	}

	removeBacklogItem(backlogitem: BacklogItem): void {
		this.backlogItems = this.backlogItems.filter((item) => item !== backlogitem)
	}
}
