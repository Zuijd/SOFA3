import { INotificationObserver } from '../Observers/INotificationObserver'

export default class WhatsAppNotification implements INotificationObserver {
	update(message: string): void {
		console.log(`[WHATSAPP] ${message}`)
	}
}
