import Movie from './src/Movie';
import MovieScreening from './src/MovieScreening';
import MovieTicket from './src/MovieTicket';
import Order from './src/Order';
import { TicketExportFormat } from './src/TicketExportFormat';

const order = new Order(1, true);
const movie = new Movie('Mr. Bean');
const movieScreening = new MovieScreening(new Date('2024-01-31T15:01:10.204Z'), 20, movie);
const ticket = new MovieTicket(movieScreening, true, 1, 2);

order.addSeatToReservation(ticket);
order.addSeatToReservation(ticket);
order.addSeatToReservation(ticket);
order.addSeatToReservation(ticket);
order.addSeatToReservation(ticket);
order.addSeatToReservation(ticket);

order.export(TicketExportFormat.JSON);
order.export(TicketExportFormat.PLAINTEXT);
