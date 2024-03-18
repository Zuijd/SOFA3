// Template for Template Pattern
export default abstract class PipelineTemplate {
	async execute(): Promise<void> {
		await this.fetchSourceAsync()
		await this.installPackagesAsync()
		await this.buildAsync()
		await this.testAsync()
		await this.analyzeAsync()
		await this.deployAsync()
		await this.executeUtilityAsync()
		await this.finishAsync()
	}

	protected async fetchSourceAsync(): Promise<void> {
		console.log('Fetching source...')
	}

	protected async finishAsync(): Promise<void> {
		console.log('Finishing...')
		console.log('Pipeline executed successfully!')
	}

	protected abstract installPackagesAsync(): Promise<void>
	protected abstract buildAsync(): Promise<void>
	protected abstract testAsync(): Promise<void>
	protected abstract analyzeAsync(): Promise<void>
	protected abstract deployAsync(): Promise<void>
	protected abstract executeUtilityAsync(): Promise<void>
}
