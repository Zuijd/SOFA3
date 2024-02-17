import Order from '../../Order'
import TicketExport from './TicketExport'

export default class TicketExportJSON extends TicketExport {
	public export(order: Order) {
		const jsonData = JSON.stringify({
			orderNr: order.getOrderNr(),
			price: order.calculatePrice(),
		})

		this.writeToFile('json', jsonData)
	}
}
