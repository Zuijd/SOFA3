import BacklogItem from './BacklogItem'
import IUser from './user/IUser'

export default class Thread {
	text: string
	reactions: Thread[] = []
	user: IUser
	backlogItem: BacklogItem

	constructor(text: string, user: IUser, backlogItem: BacklogItem) {
		this.text = text
		this.user = user
		this.backlogItem = backlogItem
	}

	addReaction(reaction: Thread): void {
		this.reactions.push(reaction)
	}
}
