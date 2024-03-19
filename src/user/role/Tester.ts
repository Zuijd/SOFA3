import IRole from './IRole'

export default class Tester implements IRole {
	performTask() {
		console.log('Tester performing task')
	}
}
