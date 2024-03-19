import Activity from './Activity'
import IProgressionState from './progression/IProgressionState'
import ProgressionStateTodo from './progression/ProgressionStateTodo'
import ThreadComponent from './thread/ThreadComponent'

export default class BacklogItem {
	userStory: string
	storyPoints: number
	activities: Activity[] = []
	progression: IProgressionState = new ProgressionStateTodo()
	threads: ThreadComponent[] = []

	constructor(userStory: string, storyPoints: number, activities: Activity[] = []) {
		this.userStory = userStory
		this.storyPoints = storyPoints
		this.activities = activities
	}

	addActivity(activity: Activity): void {
		this.activities.push(activity)
	}

	removeActivity(activity: Activity): void {
		this.activities = this.activities.filter((item) => item !== activity)
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
