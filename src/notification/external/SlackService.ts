import chalk from 'chalk'

// external slack library (adaptee)
export default class SlackService {
	sendSlackMessage(recipient: string, message: string): void {
		console.log(chalk.red('[SLACK]'), `- ${recipient}: ${message}`)
	}
}
