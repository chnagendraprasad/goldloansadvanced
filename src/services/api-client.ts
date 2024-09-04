import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
 results: T[];
}

interface CustomerReq {
  BranchId: string ;
  LoanType: string ;
 Ordering: string;
  Search: string;
}

const axiosInstance = axios.create({
  baseURL: "https://goldloan.itiorg.com/UPFLServicesLiveTest/api/CustomerServices/",
  headers: {
    'Authorization': "Basic Z29sZGxvYW5zbGl2ZTpQYXNzQCEyMw==",
    'Content-Type': "application/json",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, config.params)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
     // .get<T>(this.endpoint + '?custId=' + id)
     .get<T>(`${this.endpoint}?custId=${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
