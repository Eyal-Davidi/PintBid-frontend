import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class UserDataService {
  getAll() {
    return axios.get(API_URL + "/users");
  }

  get(id) {
    return axios.get(API_URL +`/users/${id}`);
  }

  create(data) {
    return axios.post(API_URL +"/users", data);
  }

  update(id, data) {
    return axios.put(API_URL +`/users/${id}`, data);
  }

  delete(id) {
    return axios.delete(API_URL +`/users/${id}`);
  }
  deleteAll() {
    return axios.delete(API_URL +`/products`);
  }
 
}

export default new UserDataService();
