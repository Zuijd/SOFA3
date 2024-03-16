import Report from '../Report'
import IReportExport from './IReportExport'

export default class ReportExportPng implements IReportExport {
	export(report: Report) {
		console.log('Exporting report to PNG')
	}
}
