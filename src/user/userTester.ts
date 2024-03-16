import IUser from './IUser'

export default class UserTester implements IUser {
	name: string

	constructor(name: string) {
		this.name = name
	}
}
