import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	collectCoverageFrom: [
		'src/**/*.{ts, tsx}',
		'!**/node_modules/**',
	],
	transform: { '^.+\\.ts?$': 'ts-jest' },
	testEnvironment: 'node',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov'],
};

export default config;
