import User from '../user/User'

// Component interface for Composite Pattern
export default abstract class ThreadComponent {
	private text: string
	private user: User

	constructor(text: string, user: User) {
		this.text = text
		this.user = user
	}

	abstract display(identation: number): void

	getText(): string {
		return this.text
	}

	getUser(): User {
		return this.user
	}

	setText(text: string): void {
		this.text = text
	}

	setUser(user: User): void {
		this.user = user
	}
}
