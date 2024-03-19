import { INotificationService } from '../notification/INotificationService'
import { IObserver } from '../observer/IObserver'
import IUser from './IUser'

export default class UserLeadDeveloper implements IUser, IObserver {
	name: string
	notificationMethods: INotificationService | INotificationService[]

	constructor(name: string, notificationMethod: INotificationService | INotificationService[]) {
		this.name = name
		this.notificationMethods = notificationMethod
	}

	notify(message: string): void {
		if (Array.isArray(this.notificationMethods)) {
			this.notificationMethods.forEach((method) => {
				method.sendNotification(message, this.name)
			})
		} else {
			this.notificationMethods.sendNotification(message, this.name)
		}
	}
}
