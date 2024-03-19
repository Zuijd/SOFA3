import IRole from './IRole'

export default class ScrumMaster implements IRole {
	performTask() {
		console.log('ScrumMaster performing task')
	}
}
