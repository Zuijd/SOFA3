// Template for Template Pattern
export default abstract class PipelineTemplate {
	async execute(): Promise<void> {
		await this.fetchSource()
		await this.installPackages()
		await this.build()
		await this.test()
		await this.analyze()
		await this.deploy()
		await this.executeUtility()
		await this.finish()
	}

	protected async fetchSource(): Promise<void> {
		console.log('Fetching source...')
	}

	protected async finish(): Promise<void> {
		console.log('Finishing...')
		console.log('Pipeline executed successfully!')
	}

	protected abstract installPackages(): Promise<void>
	protected abstract build(): Promise<void>
	protected abstract test(): Promise<void>
	protected abstract analyze(): Promise<void>
	protected abstract deploy(): Promise<void>
	protected abstract executeUtility(): Promise<void>
}
