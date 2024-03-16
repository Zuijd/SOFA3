import IProgressionState from './progression/IProgressionState'
import ProgressionStateTodo from './progression/ProgressionStateTodo'

export default class Activity {
	description: string
	points: number
	progression: IProgressionState = new ProgressionStateTodo()

	constructor(description: string, points: number) {
		this.description = description
		this.points = points
	}
}
