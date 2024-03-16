export default class StyleItem {
	companyName?: string
	logo?: Blob
	projectName?: string
	version?: string
	date?: Date

	constructor(companyName?: string, logo?: Blob, projectName?: string, version?: string, date?: Date) {
		this.companyName = companyName
		this.logo = logo
		this.projectName = projectName
		this.version = version
		this.date = date
	}
}
