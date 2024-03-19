import User from '../user/User'
import BacklogItemComponent from './BacklogItemComponent'

export default class ActivityLeaf extends BacklogItemComponent {
	addActivity(): void {
		throw new Error('activity cannot have activities.')
	}

	removeActivity(): void {
		throw new Error('activity cannot have activities.')
	}

	assignUser(user: User): void {
		this.user = user
		console.log(`[INTERNAL] ${this.user?.name} is assigned to activity: ${this.userStory}`)
	}

	dismissUser(): void {
		console.log(`[INTERNAL] ${this.user?.name} is dismissed of activity: ${this.userStory}`)
		this.user = undefined
	}
}
