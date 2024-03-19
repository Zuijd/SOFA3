import IRole from './IRole'

export default class LeadDeveloper implements IRole {
	performTask() {
		console.log('LeadDeveloper performing task')
	}
}
