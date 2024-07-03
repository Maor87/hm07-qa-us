// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
 
	
    "productsList": [
    {
        "id": 7,
        "quantity": 2
    },
    {
        "id": 12,
        "quantity": 1
    }
      
    ]
    
  
}

const newRequestBody = {
 
	
    "productsList": [
    {
        "id": 10,
        "quantity": 1
    },
    {
        "id": 21,
        "quantity": 2
    }
      
    ]
    
  
}


test('Adding groceries to the cart', async () => {

	let createResponse;
    
    try {
         createResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
        });

		
    } catch (error) {
        console.error(error);
    }
    let cart = await createResponse.json();
	console.log(cart);
	let cartID = cart["id"];

    try {	
		 const response = await fetch(`${config.API_URL}/api/v1/orders/${cartID}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(newRequestBody)
		});

	    expect(response.status).toBe(200);

		const result = await response.json();
		
		expect(result.productsList[3]["id"]).toBe(21);
        expect(result.productsList[3]["quantity"]).toBeGreaterThan(1);
	   
	} catch (error) {
		console.error(error);
	}
	  
});


