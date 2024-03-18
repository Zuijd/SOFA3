import Report from '../Report'
import IReportExportStrategy from './IReportExportStrategy'

// Concrete implementation for Strategy Pattern
export default class ReportExportPdf implements IReportExportStrategy {
	export(report: Report) {
		console.log('Exporting report to PDF')
	}
}
