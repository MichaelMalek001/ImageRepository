import axios from 'axios';

class HTTPService {

    upload(data) {
        return axios.post("http://localhost:8080/addImage", data);
    }
}

export default new HTTPService();