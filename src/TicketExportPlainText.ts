import Order from './Order'
import { TicketExport } from './TicketExport'

export class TicketExportPlainText extends TicketExport {
	public export(order: Order) {
		const plaintextData = 'OrderNr: ' + order.getOrderNr() + '\n' + 'Price: ' + order.calculatePrice()

		this.writeToFile('txt', plaintextData)
	}
}
