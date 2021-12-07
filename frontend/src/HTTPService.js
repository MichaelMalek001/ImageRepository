import axios from 'axios';

class HTTPService {

    upload(data) {
        return axios.post("http://localhost:8080/addImage", data);
    }

    getImageById(id) {
        return axios.get("http://localhost:8080/getImageById/" + id);
    }

    getAllImages(){
        return axios.get("http://localhost:8080/getAllImages");
    }

    deleteImageById(id){
        return axios.delete("http://localhost:8080/deleteImage/" + id);
    }
}

export default new HTTPService();