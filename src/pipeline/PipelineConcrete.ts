import PipelineTemplate from './PipelineTemplate'

// Concrete class for Template Pattern
export default class PipelineConcrete extends PipelineTemplate {
	protected async installPackages(): Promise<void> {
		console.log('Installing packages...')
	}

	protected async build(): Promise<void> {
		console.log('Building...')
	}

	protected async test(): Promise<void> {
		console.log('Testing...')
	}

	protected async analyze(): Promise<void> {
		console.log('Analyzing...')
	}

	protected async deploy(): Promise<void> {
		console.log('Deploying...')
	}

	protected async executeUtility(): Promise<void> {
		console.log('Executing utility...')
	}
}
