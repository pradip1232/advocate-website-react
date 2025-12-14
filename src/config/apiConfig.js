// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const endpoints = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    changePassword: '/auth/change-password',
  },
  users: {
    list: '/users',
    create: '/users',
    update: '/users',
    delete: '/users',
  },
  bookings: {
    list: '/bookings',
    create: '/bookings',
    update: '/bookings',
    delete: '/bookings',
  },
  claims: {
    list: '/claims',
    create: '/claims',
    update: '/claims',
    approve: '/claims/approve',
  },
  vouchers: {
    list: '/vouchers',
    utilization: '/vouchers/utilization',
  },
};