import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://172.16.200.90:9000/api/',
});

export default apiClient;
