import Subject from '../observer/Subject'
import ProgressionState from '../progression/ProgressionState'
import ProgressionStateTodo from '../progression/ProgressionStateTodo'
import ThreadComponent from '../thread/ThreadComponent'
import User from '../user/User'
import ActivityLeaf from './ActivityLeaf'

export default abstract class BacklogItemComponent extends Subject {
	private activities: ActivityLeaf[] = []
	userStory: string
	storyPoints: number
	progression: ProgressionState
	threads: ThreadComponent[] = []
	user?: User

	constructor(userStory: string, storyPoints: number) {
		super()

		this.userStory = userStory
		this.storyPoints = storyPoints
		this.progression = new ProgressionStateTodo(this)
	}

	getActivities(): ActivityLeaf[] {
		return this.activities
	}

	setActivities(activities: ActivityLeaf[]): void {
		this.activities = activities
	}

	addThread(thread: ThreadComponent): void {
		this.threads.push(thread)
	}

	removeThread(thread: ThreadComponent): void {
		this.threads = this.threads.filter((item) => item !== thread)
	}

	setProgression(progression: ProgressionState): void {
		this.progression = progression
	}

	abstract addActivity(activity: ActivityLeaf): void
	abstract removeActivity(activity: ActivityLeaf): void
	abstract assignUser(user: User): void
	abstract dismissUser(): void
}
