import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	verbose: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
	transform: {
		'^.+\\.ts?$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.json',
			},
		],
	},
	testEnvironment: 'node',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov'],
}

export default config
