import { INotificationObserver } from '../Observers/INotificationObserver'

export default class WhatsAppNotification implements INotificationObserver {
	notify(message: string): void {
		console.log(`[WHATSAPP] ${message}`)
	}
}
