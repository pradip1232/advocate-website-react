// Application constants
export const APP_NAME = 'ATP Dashboard';
export const APP_VERSION = '1.0.0';

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MANAGER: 'manager',
};

export const STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
};

export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  API: 'YYYY-MM-DD',
  DATETIME: 'DD/MM/YYYY HH:mm',
};

export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  THEME: 'theme',
};