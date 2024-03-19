import { INotificationService } from '../notification/INotificationService'
import Developer from './role/Developer'
import LeadDeveloper from './role/LeadDeveloper'
import ScrumMaster from './role/ScrumMaster'
import User from './User'
import Tester from './role/Tester'
import IRole from './role/IRole'

// Factory for Factory Pattern
export default class userFactory {
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
