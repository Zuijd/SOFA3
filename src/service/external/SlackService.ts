// external slack library (adaptee)
export default class SlackService {
	sendSlackMessage(recipient: string, message: string): void {
		console.log(`Sending slack message to ${recipient}: ${message}`)
	}
}
