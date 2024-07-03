// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  // put your body here
  
  "products": [
    {
      "id": 1,
      "quantity": 3
    },
    {
      "id": 4,
      "quantity": 1
    },
    {
      "id": 9,
      "quantity": 3
    }
  ],
  "deliveryTime": 7

}

test('Check the delivery cost', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    expect(response.status).toBe(200);
  } catch (error) {
    console.error(error);
  }
});
