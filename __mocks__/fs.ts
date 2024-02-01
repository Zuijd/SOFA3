export default {
	existsSync: jest.fn(() => false),
	mkdirSync: jest.fn(() => {}),
	writeFileSync: jest.fn(() => {}),
};
