import { ISubject } from './ISubject'

export interface IObserver {
	update(message: string): void
}
