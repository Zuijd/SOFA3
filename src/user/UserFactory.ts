import { INotificationService } from '../notification/INotificationService'
import User from './User'
import Developer from './role/Developer'
import IRole from './role/IRole'
import LeadDeveloper from './role/LeadDeveloper'
import ScrumMaster from './role/ScrumMaster'
import Tester from './role/Tester'

// Factory for Factory Pattern
export default class UserFactory {
	createUser(
		name: string,
		roleString: string,
		notificationMethod: INotificationService | INotificationService[]
	): User {
		let role: IRole

		switch (roleString) {
			case 'Developer':
				role = new Developer()
				break
			case 'LeadDeveloper':
				role = new LeadDeveloper()
				break
			case 'ScrumMaster':
				role = new ScrumMaster()
				break
			case 'Tester':
				role = new Tester()
				break
			default:
				throw new Error('Invalid role')
		}

		return new User(name, role, notificationMethod)
	}
}
