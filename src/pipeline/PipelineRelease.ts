import PipelineTemplate from './PipelineTemplate'

// Concrete class for Template Pattern
export default class PipelineRelease extends PipelineTemplate {
	protected async optionalStepsAsync(): Promise<void> {}

	protected async deployAsync(): Promise<void> {
		console.log('Deploying to Azure...')
	}
}
