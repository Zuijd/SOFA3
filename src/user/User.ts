import { INotificationService } from '../notification/INotificationService'
import { IObserver } from '../observer/IObserver'
import IRole from './role/IRole'

export default class User implements IObserver {
	name: string
	role: IRole
	notificationMethods: INotificationService | INotificationService[]

	constructor(name: string, role: IRole, notificationMethod: INotificationService | INotificationService[]) {
		this.name = name
		this.role = role
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

	performTask(): void {
		this.role.performTask()
	}
}
