import BacklogItem from './BacklogItem'

export default class Activity extends BacklogItem {
	addActivity(activity: Activity): void {
		throw new Error('Activities nested in activities are not supported')
	}

	removeActivity(activity: Activity): void {
		throw new Error('Activities nested in activities are not supported')
	}
}
