import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class ProductDataService {
  getAll() {
    return axios.get(API_URL + "/products");
  }

  get(id) {
    return axios.get(API_URL +`/products/${id}`);
  }

  create(data) {
    return axios.post(API_URL +"/products", data);
  }

  update(id, data) {
    return axios.put(API_URL +`/products/${id}`, data);
  }

  delete(id) {
    return axios.delete(API_URL +`/products/${id}`);
  }

  deleteAll() {
    return axios.delete(API_URL +`/products`);
  }

}

export default new ProductDataService();
