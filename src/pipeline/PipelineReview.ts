import PipelineTemplate from './PipelineTemplate'

// Concrete class for Template Pattern
export default class PipelineReview extends PipelineTemplate {
	protected async optionalStepsAsync(): Promise<void> {
		await this.publishTestResultsAsync()
	}

	protected async publishTestResultsAsync(): Promise<void> {
		console.log('Publishing test results...')
	}

	protected async deployAsync(): Promise<void> {
		console.log('Deploying to testserver...')
	}
}
