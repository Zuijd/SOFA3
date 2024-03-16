import IUser from './IUser'

export default class UserScrumMaster implements IUser {
	name: string

	constructor(name: string) {
		this.name = name
	}
}
