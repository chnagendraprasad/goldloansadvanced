import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: "https://goldloan.itiorg.com/UPFLServicesLiveTest/api/CustomerServices/",
    headers: {
        'Authorization': "Basic Z29sZGxvYW5zbGl2ZTpQYXNzQCEyMw==",
        'Content-Type': "application/json",
    },
});
class APIClient {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    getAll = (config) => {
        return axiosInstance
            .post(this.endpoint, config)
            .then((res) => res.data);
    };
    get = (id) => {
        return axiosInstance
            // .get<T>(this.endpoint + '?custId=' + id)
            .get(`${this.endpoint}?custId=${id}`)
            .then((res) => res.data);
    };
}
export default APIClient;
