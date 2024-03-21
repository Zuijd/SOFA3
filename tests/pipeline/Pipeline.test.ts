import PipelineRelease from '../../src/pipeline/PipelineRelease'
import PipelineReview from '../../src/pipeline/PipelineReview'

describe('PipelineRelease', () => {
	let pipelineRelease: PipelineRelease
	let pipelineReview: PipelineReview

	beforeEach(() => {
		pipelineRelease = new PipelineRelease()
		pipelineReview = new PipelineReview()
	})

	it('should deploy release pipeline asynchronously', async () => {
		// Arrange
		const spy = jest.spyOn(console, 'log')

		// Act
		await pipelineRelease.executeAsync()

		// Assert
		expect(spy).toHaveBeenCalledTimes(9)
	})

	it('should deploy review pipeline asynchronously', async () => {
		// Arrange
		const spy = jest.spyOn(console, 'log')

		// Act
		await pipelineReview.executeAsync()

		// Assert
		expect(spy).toHaveBeenCalledTimes(19)
	})
})
