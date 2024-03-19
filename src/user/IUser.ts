import { INotificationService } from '../notification/INotificationService'

export default interface IUser {
	name: string
	notificationMethods: INotificationService | INotificationService[]
}
