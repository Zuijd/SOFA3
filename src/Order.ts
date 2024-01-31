import MovieTicket from './MovieTicket';
import { TicketExportFormat } from './TicketExportFormat';

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
			const withDiscount = isMidDay && this.isStudentOrder && this.movieTickets.length >= 6;

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
		switch (format) {
			case TicketExportFormat.PLAINTEXT:
				return 'OrderNr: ' + this.getOrderNr() + '\n' + 'Price: ' + this.calculatePrice();
			case TicketExportFormat.JSON:
				return JSON.stringify({
					orderNr: this.getOrderNr(),
					price: this.calculatePrice(),
				});
		}
	}
}
