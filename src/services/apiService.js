import axios from 'axios';
import { apiConfig, endpoints } from '../config/apiConfig';
import { LOCAL_STORAGE_KEYS } from '../constants';

// Create axios instance
const apiClient = axios.create(apiConfig);

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_DATA);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API service methods
export const apiService = {
  // Auth services
  login: (credentials) => apiClient.post(endpoints.auth.login, credentials),
  logout: () => apiClient.post(endpoints.auth.logout),
  changePassword: (data) => apiClient.post(endpoints.auth.changePassword, data),
  
  // User services
  getUsers: (params) => apiClient.get(endpoints.users.list, { params }),
  createUser: (userData) => apiClient.post(endpoints.users.create, userData),
  updateUser: (id, userData) => apiClient.put(`${endpoints.users.update}/${id}`, userData),
  deleteUser: (id) => apiClient.delete(`${endpoints.users.delete}/${id}`),
  
  // Booking services
  getBookings: (params) => apiClient.get(endpoints.bookings.list, { params }),
  createBooking: (bookingData) => apiClient.post(endpoints.bookings.create, bookingData),
  updateBooking: (id, bookingData) => apiClient.put(`${endpoints.bookings.update}/${id}`, bookingData),
  deleteBooking: (id) => apiClient.delete(`${endpoints.bookings.delete}/${id}`),
  
  // Claims services
  getClaims: (params) => apiClient.get(endpoints.claims.list, { params }),
  createClaim: (claimData) => apiClient.post(endpoints.claims.create, claimData),
  updateClaim: (id, claimData) => apiClient.put(`${endpoints.claims.update}/${id}`, claimData),
  approveClaim: (id) => apiClient.post(`${endpoints.claims.approve}/${id}`),
  
  // Voucher services
  getVouchers: (params) => apiClient.get(endpoints.vouchers.list, { params }),
  getVoucherUtilization: (params) => apiClient.get(endpoints.vouchers.utilization, { params }),
};

export default apiService;