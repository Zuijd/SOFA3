import IReportExport from './export/IReportExport'
import IUser from '../user/IUser'
import StyleItem from './StyleItem'

export default class Report {
	effortPoints: number
	burndownChart: Blob
	team: IUser[]
	header?: StyleItem
	footer?: StyleItem

	constructor(effortPoints: number, burndownChart: Blob, team: IUser[] = [], header?: StyleItem, footer?: StyleItem) {
		this.effortPoints = effortPoints
		this.burndownChart = burndownChart
		this.team = team
		this.header = header
		this.footer = footer
	}

	public export(exportType: IReportExport) {
		exportType.export(this)
	}
}
