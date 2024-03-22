// Template for Template Pattern
export default abstract class PipelineTemplate {
	async executeAsync(): Promise<void> {
		await this.fetchSourceAsync()
		await this.installPackagesAsync()
		await this.buildAsync()
		await this.testAsync()
		await this.analyzeAsync()
		await this.deployAsync()
		await this.optionalStepsAsync()
		await this.executeUtilityAsync()
		await this.finishAsync()
	}

	protected async fetchSourceAsync(): Promise<void> {
		console.log('Fetching source...')
	}

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

	protected async executeUtilityAsync(): Promise<void> {
		console.log('Executing utility...')
	}

	protected async finishAsync(): Promise<void> {
		console.log('Finishing...')
		console.log('Pipeline executed successfully!')
	}

	protected abstract deployAsync(): Promise<void>
	protected abstract optionalStepsAsync(): Promise<void>
}
