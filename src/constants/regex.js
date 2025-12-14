// Regular expressions for validation
export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  alphabetic: /^[a-zA-Z\s]+$/,
  numeric: /^\d+$/,
  decimal: /^\d+(\.\d{1,2})?$/,
  url: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  zipCode: /^\d{5}(-\d{4})?$/,
  creditCard: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
  ssn: /^\d{3}-?\d{2}-?\d{4}$/,
};

export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  password: 'Password must contain at least 8 characters, including uppercase, lowercase, number and special character',
  minLength: (min) => `Minimum ${min} characters required`,
  maxLength: (max) => `Maximum ${max} characters allowed`,
  numeric: 'Only numbers are allowed',
  alphabetic: 'Only letters are allowed',
  alphanumeric: 'Only letters and numbers are allowed',
};