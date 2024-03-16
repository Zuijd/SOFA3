import IUser from './IUser'

export default class UserLeadDeveloper implements IUser {
	name: string

	constructor(name: string) {
		this.name = name
	}
}
