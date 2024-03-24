import PipelineTemplate from './PipelineTemplate'

// Concrete class for Template Pattern
export default class PipelineRelease extends PipelineTemplate {
	protected async optionalStepsAsync(): Promise<void> {
		// optional steps when needed
	}

	protected async deployAsync(): Promise<void> {
		console.log('Deploying to Azure...')
	}
}
