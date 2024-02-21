import { INotificationObserver } from './INotificationObserver'

export default class NotificationObservable {
	private observer: INotificationObserver | undefined

	attach(observer: INotificationObserver): void {
		this.observer = observer
	}

	detach(): void {
		this.observer = undefined
	}

	notify(message: string): void {
		if (this.observer) {
			this.observer.notify(message)
		} else {
			throw new Error('No observer attached!')
		}
	}
}
