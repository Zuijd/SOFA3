import { IObserver } from './IObserver'

export default abstract class Subject {
	private observers: IObserver[] = []

	attach(observer: IObserver) {
		this.observers.push(observer)
	}

	detach(observer: IObserver) {
		this.observers = this.observers.filter((item) => item !== observer)
	}

	notify(message: string) {
		this.observers.forEach((observer) => observer.notify(message))
	}

	getObservers() {
		return this.observers
	}
}
