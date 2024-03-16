import IUser from './IUser'

export default class UserDeveloper implements IUser {
	name: string

	constructor(name: string) {
		this.name = name
	}
}
