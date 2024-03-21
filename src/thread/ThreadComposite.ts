import ThreadComponent from './ThreadComponent'

// Composite class for Composite Pattern
export default class ThreadComposite extends ThreadComponent {
	threads: ThreadComponent[] = []

	addThread(thread: ThreadComponent): void {
		this.threads.push(thread)
	}

	removeThread(thread: ThreadComponent): void {
		this.threads = this.threads.filter((t) => t !== thread)
	}

	getThreads(): ThreadComponent[] {
		return this.threads
	}

	display(indentation: number = 0): void {
		console.log(' '.repeat(indentation) + this.getUser()?.name + ': ' + this.getText())
		this.threads.forEach((child) => child.display(indentation + 2))
	}
}
