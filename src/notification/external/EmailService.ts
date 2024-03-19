import chalk from 'chalk'

// external email library (adaptee)
export default class EmailService {
	sendEmail(recipient: string, message: string): void {
		console.log(chalk.red('[EMAIL]'), `- ${recipient}: ${message}`)
	}
}
