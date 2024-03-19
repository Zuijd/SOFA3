import { Observer } from './Observer'

export default abstract class Subject {
	observers: Observer[] = []

	attach(observer: Observer) {
		this.observers.push(observer)
	}

	detach(observer: Observer) {
		this.observers = this.observers.filter((item) => item !== observer)
	}

	notify(message: string) {
		this.observers.forEach((observer) => observer.notify(message))
	}
}
