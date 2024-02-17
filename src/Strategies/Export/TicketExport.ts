import fs from 'fs'
import Order from '../../Order'

export default abstract class TicketExport {
	private folderPath = './exports'

	public abstract export(order: Order): void

	writeToFile(extenstion: string, data: string) {
		const currentDate = new Date()

		if (!fs.existsSync(this.folderPath)) {
			fs.mkdirSync(this.folderPath)
		}

		const path = `${
			this.folderPath
		}/order-export-${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}-${currentDate.getTime()}`

		fs.writeFileSync(path + '.' + extenstion, data, 'utf-8')
	}
}
