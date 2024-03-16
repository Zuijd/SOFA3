import Activity from './Activity'
import IProgressionState from './progression/IProgressionState'
import ProgressionStateTodo from './progression/ProgressionStateTodo'

export default class BacklogItem {
	userStory: string
	storyPoints: number
	activities: Activity[] = []
	progression: IProgressionState = new ProgressionStateTodo()

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
}
