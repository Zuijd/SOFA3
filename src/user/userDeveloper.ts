import { INotificationService } from '../notification/INotificationService'
import { Observer } from '../observer/Observer'
import IUser from './IUser'

export default class UserDeveloper implements IUser, Observer {
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
