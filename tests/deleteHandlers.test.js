
const config = require('../config');

test('Deleting the kit', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: 'DELETE',
    });

    expect(response.status).toBe(200);
   
  } catch (error) {
    console.error(error);
  }
});
