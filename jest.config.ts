import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	collectCoverageFrom: [
		'**/*.{ts, tsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
	],
	transform: { '^.+\\.ts?$': 'ts-jest' },
	testEnvironment: 'node',
};

export default config;
