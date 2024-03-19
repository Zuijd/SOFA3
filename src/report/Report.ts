import ReportExportStrategy from './export/IReportExportStrategy'
import IUser from '../user/IUser'
import StyleItem from './StyleItem'
import ReportExportPng from './export/ReportExportPng'

// Conrtext class for Strategy Pattern
export default class Report {
	private exportStrategy: ReportExportStrategy
	effortPoints: number
	burndownChart?: Blob
	team: IUser[]
	header?: StyleItem
	footer?: StyleItem

	constructor(effortPoints: number, team: IUser[] = [], header?: StyleItem, footer?: StyleItem) {
		this.effortPoints = effortPoints
		this.team = team
		this.header = header
		this.footer = footer
		this.exportStrategy = new ReportExportPng()
	}

	setExportStrategy(exportStrategy: ReportExportStrategy): void {
		this.exportStrategy = exportStrategy
	}

	export() {
		this.exportStrategy.export(this)
	}
}
