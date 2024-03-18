import PipelineTemplate from './PipelineTemplate'

// Concrete class for Template Pattern
export default class PipelineConcrete extends PipelineTemplate {
	protected async installPackagesAsync(): Promise<void> {
		console.log('Installing packages...')
	}

	protected async buildAsync(): Promise<void> {
		console.log('Building...')
	}

	protected async testAsync(): Promise<void> {
		console.log('Testing...')
	}

	protected async analyzeAsync(): Promise<void> {
		console.log('Analyzing...')
	}

	protected async deployAsync(): Promise<void> {
		console.log('Deploying...')
	}

	protected async executeUtilityAsync(): Promise<void> {
		console.log('Executing utility...')
	}
}
