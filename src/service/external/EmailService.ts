// external email library (adaptee)
export default class EmailService {
	sendEmail(recipient: string, message: string): void {
		console.log(`Sending email to ${recipient}: ${message}`)
	}
}
