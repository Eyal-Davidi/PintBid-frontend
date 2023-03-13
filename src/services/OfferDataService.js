import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class OfferDataService {
  getAll() {
    return axios.get(API_URL + "/offers");
  }

  get(id) {
    return axios.get(API_URL +`/offers/${id}`);
  }

  create(data) {
    return axios.post(API_URL +"/offers", data);
  }

  update(id, data) {
    return axios.put(API_URL +`/offers/${id}`, data);
  }

  delete(id) {
    return axios.delete(API_URL +`/auctions/${id}`);
  }
 
}

export default new OfferDataService();
