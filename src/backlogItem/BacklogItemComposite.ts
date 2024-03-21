import User from '../user/User'
import ActivityLeaf from './ActivityLeaf'
import BacklogItemComponent from './BacklogItemComponent'

export default class BacklogItemComposite extends BacklogItemComponent {
	constructor(userStory: string, storyPoints: number, activities: ActivityLeaf[] = []) {
		super(userStory, storyPoints)
		this.setActivities(activities)
	}

	addActivity(activity: ActivityLeaf): void {
		this.setActivities([...this.getActivities(), activity])
		this.notify(`Activity added: ${activity.userStory}`)
	}

	removeActivity(activity: ActivityLeaf): void {
		this.setActivities(this.getActivities().filter((item) => item !== activity))
		this.notify(`Activity removed: ${activity.userStory}`)
	}

	assignUser(user: User): void {
		this.user = user
		console.log(`[INTERNAL] ${this.user?.name} is assigned to backlog item: ${this.userStory}`)
	}

	dismissUser(): void {
		console.log(`[INTERNAL] ${this.user?.name} is dismissed of backlog item: ${this.userStory}`)
		this.user = undefined
	}
}
