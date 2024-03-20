import BacklogItemComposite from './backlogItem/BacklogItemComposite'
import Sprint from './sprint/Sprint'

export default class Project {
	name: string
	doD: string
	backlog: BacklogItemComposite[] = []
	sprints: Sprint[] = []

	constructor(name: string, doD: string) {
		this.name = name
		this.doD = doD

		console.log(`[INTERNAL] Project ${this.name} is created`)
	}

	addBacklogItem(backlogItem: BacklogItemComposite): void {
		this.backlog.push(backlogItem)
	}

	removeBacklogItem(backlogitem: BacklogItemComposite): void {
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
}
