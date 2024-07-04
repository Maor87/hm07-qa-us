
const config = require('../config');

const requestBody = {
  
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
      "id": 2,
      "quantity": 1
    }
  ],
  "deliveryTime": 7

}

test('Should return status 200 for delivery cost check', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
   
  } catch (error) {
    console.error(error);
  }
  
  let response;
  
   try {
    response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
     
  } catch (error) {
    console.error(error);
  }
    expect(response.status).toBe(200);
    
    const result = await response.json();
  
   expect(result['Fast Delivery'].deliveryPrice).toBe(0);
});

