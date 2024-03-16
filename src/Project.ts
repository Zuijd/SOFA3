import BacklogItem from './BacklogItem'
import Thread from './Thread'
import Sprint from './sprint/Sprint'

export default class Project {
	name: string
	doD: string
	backlog: BacklogItem[] = []
	sprints: Sprint[] = []
	discussionForum: Thread[] = []

	constructor(name: string, doD: string) {
		this.name = name
		this.doD = doD
	}

	addBacklogItem(backlogItem: BacklogItem): void {
		this.backlog.push(backlogItem)
	}

	removeBacklogItem(backlogitem: BacklogItem): void {
		this.backlog = this.backlog.filter((item) => item !== backlogitem)
	}

	addSprint(sprint: Sprint): void {
		this.sprints.push(sprint)
	}

	removeSprint(sprint: Sprint): void {
		this.sprints = this.sprints.filter((item) => item !== sprint)
	}

	addThread(thread: Thread): void {
		this.discussionForum.push(thread)
	}

	removeThread(thread: Thread): void {
		this.discussionForum = this.discussionForum.filter((item) => item !== thread)
	}
}
