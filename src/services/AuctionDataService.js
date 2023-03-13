import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class AuctionDataService {
  getAll() {
    return axios.get(API_URL + "/auctions");
  }

  get(id) {
    return axios.get(API_URL +`/auctions/${id}`);
  }

  
  create(data) {
    return axios.post(API_URL +"/auctions", data);
  }

  update(id, data) {
    return axios.put(API_URL +`/auctions/${id}`, data);
  }

  delete(id) {
    return axios.delete(API_URL +`/auctions/${id}`);
  }


getByCategory(category) {
  return axios.get(API_URL +`/auctions/category/${category}`);
}

getByEndStatus(status) {
  return axios.get(API_URL +`/auctions/status/${status}`);
}

getByEndDate(date) {
  return axios.get(API_URL +`/auctions/date/${date}`);
}

 
}

export default new AuctionDataService();
