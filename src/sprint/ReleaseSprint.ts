import Report from '../report/Report'
import Sprint from './Sprint'
import { SprintStatus } from './SprintStatus'

export default class ReleaseSprint extends Sprint {
	private report: Report | undefined

	constructor(name: string, startDate: Date, endDate: Date, status: SprintStatus) {
		super(name, startDate, endDate, status)
	}

	setReport(report: Report): void {
		this.report = report
	}

	getReport(): Report | undefined {
		return this.report
	}
}
