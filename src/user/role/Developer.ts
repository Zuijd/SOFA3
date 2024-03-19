import IRole from './IRole'

export default class Developer implements IRole {
	performTask() {
		console.log('Developer performing task')
	}
}
