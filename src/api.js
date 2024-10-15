import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
});

// Tasks API endpoints
export const getCustomerByNic = (NIC) => api.get(`/customers/${NIC}`);
export const getAccountTypes = () => api.get(`/accountTypes/`);
export const getAccountNo = () => api.get('/accounts/next-account/');
export const createAccount = (accountData) => api.post('/accounts/create', accountData);

//Auth API endpoints
export const loginUser = (userData) => api.post('/auth/login', userData);
export const register = (userData) => api.post('/auth/register', userData);

export default api;