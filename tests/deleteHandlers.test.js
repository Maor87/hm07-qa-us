// eslint-disable-next-line no-undef
const config = require('../config');

test('Deleting the kit', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});

		const deleted = await response.json();
		expect(response.status).toBe(200);
		console.log(deleted);
	} catch (error) {
		console.error(error);
	}
});
