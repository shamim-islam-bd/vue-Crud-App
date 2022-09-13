import axios from "axios";

class Customers {
  static serverUrl = "http://localhost:9001";

  static getAllCustomers() {
    const res = axios
      .get(`${this.serverUrl}/customers`)
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(res);
    return res;
  }

  static getCustomerDetails(id) {
    const res = axios
      .get(`${this.serverUrl}/customers/${id}`)
      .then((res) => res)
      .catch((err) => console.log(err));
    return res;
  }

  static createCustomer(customer) {
    const res = axios
      .post(`${this.serverUrl}/customers`, customer)
      .then((res) => res)
      .catch((err) => console.log(err));
    return res;
  }
  static updateCustomer(customer) {
    const res = axios
      .put(`${this.serverUrl}/customers/${customer.id}`, customer)
      .then((res) => res)
      .catch((err) => console.log(err));
    return res;
  }
  static deleteCustomer(id) {
    const res = axios
      .delete(`${this.serverUrl}/customers/${id}`)
      .then((res) => res)
      .catch((err) => console.log(err));
    return res;
  }
}

export default Customers;
