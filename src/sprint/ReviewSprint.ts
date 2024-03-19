import Sprint from './Sprint'
import { SprintStatus } from './SprintStatus'

export default class ReviewSprint extends Sprint {
	reviewSummary: File

	constructor(name: string, startDate: Date, endDate: Date, status: SprintStatus) {
		super(name, startDate, endDate, status)
	}
}
