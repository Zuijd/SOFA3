import MovieTicket from './MovieTicket';
import { TicketExportFormat } from './TicketExportFormat';
import fs from 'fs';

export default class Order {
	orderNr: number;
	isStudentOrder: boolean;
	movieTickets: MovieTicket[] = [];

	constructor(orderNr: number, isStudentOrder: boolean) {
		this.orderNr = orderNr;
		this.isStudentOrder = isStudentOrder;
	}

	getOrderNr(): number {
		return this.orderNr;
	}

	addSeatToReservation(ticket: MovieTicket) {
		this.movieTickets.push(ticket);
	}

	calculatePrice(): number {
		let totalTicketPrice: number = 0;
		this.movieTickets.forEach((ticket, index) => {
			let ticketPrice = 0;

			const pricePerSeat: number = ticket.movieScreening.getPricingPerSeat();
			const dateEndTime: Date = ticket.movieScreening.dateEndTime;
			const isMidDay: boolean = dateEndTime.getDay() >= 1 && dateEndTime.getDay() <= 4;
			const isFree = (this.isStudentOrder && (index + 1) % 2 === 0) || (isMidDay && (index + 1) % 2 === 0);
			const withDiscount = isMidDay && !this.isStudentOrder && this.movieTickets.length >= 6;

			if (isFree) {
				return;
			}

			if (ticket.isPremium) {
				ticketPrice += this.isStudentOrder ? 2 : 3;
			}

			totalTicketPrice += ticketPrice + pricePerSeat * (withDiscount ? 0.9 : 1);
		});

		return totalTicketPrice;
	}

	export(format: TicketExportFormat) {
		const currentDate = new Date();
		const folderPath = './exports';

		function writeToFile(extenstion: string, data: string) {
			if (!fs.existsSync(folderPath)) {
				fs.mkdirSync(folderPath);
			}

			const path = `${folderPath}/order-export-${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}-${currentDate.getTime()}`;
			fs.writeFileSync(path + '.' + extenstion, data, 'utf-8');
		}

		switch (format) {
			case TicketExportFormat.PLAINTEXT:
				const plaintextData = 'OrderNr: ' + this.getOrderNr() + '\n' + 'Price: ' + this.calculatePrice();
				writeToFile('txt', plaintextData);
				break;

			case TicketExportFormat.JSON:
				const jsonData = JSON.stringify({
					orderNr: this.getOrderNr(),
					price: this.calculatePrice(),
				});
				writeToFile('json', jsonData);
				break;

			default:
				throw new Error('Unsupported export format');
		}
	}
}
