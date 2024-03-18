import IUser from '../user/IUser'

// Component interface for Composite Pattern
export default abstract class ThreadComponent {
	private text: string
	private user: IUser

	constructor(text: string, user: IUser) {
		this.text = text
		this.user = user
	}

	abstract display(identation: number): void

	getText(): string {
		return this.text
	}

	getUser(): IUser {
		return this.user
	}

	setText(text: string): void {
		this.text = text
	}

	setUser(user: IUser): void {
		this.user = user
	}
}
