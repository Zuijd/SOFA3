import Report from '../Report'

// Strategy Interface for Strategy Pattern
export default interface IReportExportStrategy {
	export(report: Report): void
}
