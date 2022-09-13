
export class Customers {
 
    static serverUrl = 'http://localhost:9001';
    
    static getAllCustomers() {
        return fetch(`${Customers.serverUrl}/customers`)
            .then(response => response.json());
    }

}