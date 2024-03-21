import Report from '../../src/report/Report'
import StyleItem from '../../src/report/StyleItem'
import ReportExportPdf from '../../src/report/export/ReportExportPdf'
import ReportExportPng from '../../src/report/export/ReportExportPng'

describe('Report', () => {
	let report: Report

	beforeEach(() => {
		report = new Report(10, [], new StyleItem(), new StyleItem())
	})

	it('should set the export strategy correctly', () => {
		// Arrange
		const spy = jest.spyOn(report, 'setExportStrategy')
		const exportStrategy = new ReportExportPng()

		// Act
		report.setExportStrategy(exportStrategy)

		// Assert
		expect(spy).toHaveBeenCalledWith(exportStrategy)
		expect(spy).toHaveBeenCalledTimes(1)
	})

	it('should export the report correctly when strategy PNG', () => {
		// Arrange
		const spy = jest.spyOn(console, 'log')
		const exportStrategy = new ReportExportPng()
		report.setExportStrategy(exportStrategy)

		// Act
		report.export()

		// Assert
		expect(spy).toHaveBeenCalledTimes(1)
		expect(spy).toHaveBeenCalledWith('Exporting report to PNG')
	})

	it('should export the report correctly when strategy PDF', () => {
		// Arrange
		const spy = jest.spyOn(console, 'log')
		const exportStrategy = new ReportExportPdf()
		report.setExportStrategy(exportStrategy)

		// Act
		report.export()

		// Assert
		expect(spy).toHaveBeenCalledTimes(2)
		expect(spy).toHaveBeenCalledWith('Exporting report to PDF')
	})
})
