import Activity from './Activity'
import Subject from './observer/Subject'
import IProgressionState from './progression/IProgressionState'
import ProgressionStateTodo from './progression/ProgressionStateTodo'
import ThreadComponent from './thread/ThreadComponent'
import IUser from './user/IUser'

export default class BacklogItem extends Subject {
	userStory: string
	storyPoints: number
	activities: Activity[] = []
	progression: IProgressionState = new ProgressionStateTodo()
	threads: ThreadComponent[] = []
	user?: IUser

	constructor(userStory: string, storyPoints: number, activities: Activity[] = []) {
		super()

		this.userStory = userStory
		this.storyPoints = storyPoints
		this.activities = activities
	}

	addActivity(activity: Activity): void {
		this.activities.push(activity)

		this.notify(`Activity added: ${activity.userStory}`)
	}

	removeActivity(activity: Activity): void {
		this.activities = this.activities.filter((item) => item !== activity)

		this.notify(`Activity removed: ${activity.userStory}`)
	}

	addThread(thread: ThreadComponent): void {
		this.threads.push(thread)
	}

	removeThread(thread: ThreadComponent): void {
		this.threads = this.threads.filter((item) => item !== thread)
	}

	assignUser(user: IUser): void {
		this.user = user

		switch (this.constructor) {
			case Activity:
				console.log(`[INTERNAL] ${this.user?.name} is assigned to activity: ${this.userStory}`)
				break
			case BacklogItem:
				console.log(`[INTERNAL] ${this.user?.name} is assigned to backlog item: ${this.userStory}`)
				break
		}
	}

	dismissUser(): void {
		switch (this.constructor) {
			case Activity:
				console.log(`[INTERNAL] ${this.user?.name} is dismissed of activity: ${this.userStory}`)
				break
			case BacklogItem:
				console.log(`[INTERNAL] ${this.user?.name} is dismissed of backlog item: ${this.userStory}`)
				break
		}

		this.user = undefined
	}

	setState(todo: IProgressionState): void {
		this.progression = todo
	}

	setToTodo(): void {
		this.progression.setToToDo(this)
	}

	setToDoing(): void {
		this.progression.setToDoing(this)
	}

	setToReadyForTesting(): void {
		this.progression.setToReadyForTesting(this)
	}

	setToTesting(): void {
		this.progression.setToTesting(this)
	}

	setToTested(): void {
		this.progression.setToTested(this)
	}

	setToDone(): void {
		this.progression.setToDone(this)
	}
}
