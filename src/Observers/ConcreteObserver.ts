import { IObserver } from './IObserver'

export abstract class ConcreteObserver {
	private observers: IObserver[] = []

	attach(observer: IObserver): void {
		const observerExists = this.observers.includes(observer)

		if (observerExists) {
			throw new Error('Observer has already been subscribed')
		}

		this.observers.push(observer)
	}

	detach(observer: IObserver): void {
		const observerIndex = this.observers.indexOf(observer)

		if (observerIndex === -1) {
			throw new Error('Observer does not exist')
		}

		this.observers.splice(observerIndex, 1)
	}

	notify(message: string): void {
		for (const observer of this.observers) {
			observer.update(message)
		}
	}
}
