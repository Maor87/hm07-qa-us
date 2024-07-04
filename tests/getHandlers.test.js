
 const config = require('../config');

 test('Get a list of warehouses', async () => {
   let actualStatus;
   let response;

  try {
  response = await fetch(`${config.API_URL}/api/v1/warehouses`);
  actualStatus = response.status;
  } catch (error) {
  console.error(error);
  }
  const data = await response.json();
  const warehouses = data.length;
  expect(warehouses).toBeGreaterThan(0);
  expect(actualStatus).toBe(200);
  
});

