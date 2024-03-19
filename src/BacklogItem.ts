import Activity from './Activity'
import Subject from './observer/Subject'
import IProgressionState from './progression/IProgressionState'
import ProgressionStateTodo from './progression/ProgressionStateTodo'
import ThreadComponent from './thread/ThreadComponent'

export default class BacklogItem extends Subject {
	userStory: string
	storyPoints: number
	activities: Activity[] = []
	progression: IProgressionState = new ProgressionStateTodo()
	threads: ThreadComponent[] = []

	constructor(userStory: string, storyPoints: number, activities: Activity[] = []) {
		super()

		this.userStory = userStory
		this.storyPoints = storyPoints
		this.activities = activities
	}

	addActivity(activity: Activity): void {
		this.activities.push(activity)

		this.notify(`Activity added: ${activity.description}`)
	}

	removeActivity(activity: Activity): void {
		this.activities = this.activities.filter((item) => item !== activity)

		this.notify(`Activity removed: ${activity.description}`)
	}

	addThread(thread: ThreadComponent): void {
		this.threads.push(thread)
	}

	removeThread(thread: ThreadComponent): void {
		this.threads = this.threads.filter((item) => item !== thread)
	}

	setProgression(progression: IProgressionState): void {
		this.progression = progression
	}
}
