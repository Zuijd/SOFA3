import Movie from './src/Movie'
import MovieScreening from './src/MovieScreening'
import MovieTicket from './src/MovieTicket'
import { ConsoleNotification } from './src/Notifications/ConsoleNotification'
import EmailNotification from './src/Notifications/EmailNotification'
import Order from './src/Order'

const consoleNotification = new ConsoleNotification()

const order = new Order(1, false)
const movie = new Movie('Mr. Bean')
const movieScreening = new MovieScreening(new Date('2024-01-31T15:01:10.204Z'), 20, movie)
const ticket = new MovieTicket(movieScreening, false, 1, 2)

order.attach(consoleNotification)

order.addSeatToReservation(ticket)
order.addSeatToReservation(ticket)
order.addSeatToReservation(ticket)
order.addSeatToReservation(ticket)
order.addSeatToReservation(ticket)
order.addSeatToReservation(ticket)

order.submit()
order.attach(new EmailNotification())

order.startPayment()
