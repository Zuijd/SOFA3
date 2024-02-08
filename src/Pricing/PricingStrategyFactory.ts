import IPricingStrategy from './IPricingStrategy'
import RegularPricingStrategy from './RegularPricingStrategy'
import StudentPricingStrategy from './StudentPricingStrategy'

export default class PricingStrategyFactory {
	private isStudentOrder: boolean = false

	constructor(isStudentOrder: boolean) {
		this.isStudentOrder = isStudentOrder
	}

	getPricingStrategy(): IPricingStrategy {
		return this.isStudentOrder ? new StudentPricingStrategy() : new RegularPricingStrategy()
	}
}
