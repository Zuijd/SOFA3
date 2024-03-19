import BacklogItemComponent from './backlogItem/BacklogItemComponent'
// import Thread from './Thread'
import Sprint from './sprint/Sprint'

export default class Project {
	name: string
	doD: string
	backlog: BacklogItemComponent[] = []
	sprints: Sprint[] = []
	// discussionForum: Thread[] = []

	constructor(name: string, doD: string) {
		this.name = name
		this.doD = doD

		console.log(`[INTERNAL] Project ${this.name} is created`)
	}

	addBacklogItem(backlogItem: BacklogItemComponent): void {
		this.backlog.push(backlogItem)
	}

	removeBacklogItem(backlogitem: BacklogItemComponent): void {
		this.backlog = this.backlog.filter((item) => item !== backlogitem)
	}

	addSprint(sprint: Sprint): void {
		this.sprints.push(sprint)
	}

	removeSprint(sprint: Sprint): void {
		this.sprints = this.sprints.filter((item) => item !== sprint)
	}

	displaySprints(): void {
		for (const sprint of this.sprints) {
			console.log(sprint)
		}
	}

	// addThread(thread: Thread): void {
	// 	this.discussionForum.push(thread)
	// }

	// removeThread(thread: Thread): void {
	// 	this.discussionForum = this.discussionForum.filter((item) => item !== thread)
	// }
}
