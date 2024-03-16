import Report from '../Report'
import IReportExport from './IReportExport'

export default class ReportExportPdf implements IReportExport {
	export(report: Report) {
		console.log('Exporting report to PDF')
	}
}
