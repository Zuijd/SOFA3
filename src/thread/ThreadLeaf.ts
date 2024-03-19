import ThreadComponent from './ThreadComponent'

// Leaf class for Composite Pattern
export default class ThreadLeaf extends ThreadComponent {
	display(indentation: number = 0): void {
		console.log(' '.repeat(indentation) + this.getUser().name + ': ' + this.getText())
	}
}
