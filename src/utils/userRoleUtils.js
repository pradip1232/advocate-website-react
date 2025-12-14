import { USER_ROLES } from '../constants';

// User role utility functions
export const hasRole = (user, role) => {
  if (!user || !user.role) return false;
  return user.role === role;
};

export const hasAnyRole = (user, roles) => {
  if (!user || !user.role) return false;
  return roles.includes(user.role);
};

export const isAdmin = (user) => {
  return hasRole(user, USER_ROLES.ADMIN);
};

export const isManager = (user) => {
  return hasRole(user, USER_ROLES.MANAGER);
};

export const isUser = (user) => {
  return hasRole(user, USER_ROLES.USER);
};

export const canManageUsers = (user) => {
  return hasAnyRole(user, [USER_ROLES.ADMIN, USER_ROLES.MANAGER]);
};

export const canApprove = (user) => {
  return hasAnyRole(user, [USER_ROLES.ADMIN, USER_ROLES.MANAGER]);
};

export const canDelete = (user) => {
  return hasRole(user, USER_ROLES.ADMIN);
};

export const getRoleDisplayName = (role) => {
  const roleNames = {
    [USER_ROLES.ADMIN]: 'Administrator',
    [USER_ROLES.MANAGER]: 'Manager',
    [USER_ROLES.USER]: 'User',
  };
  return roleNames[role] || role;
};

export const getRolePermissions = (role) => {
  const permissions = {
    [USER_ROLES.ADMIN]: [
      'manage_users',
      'approve_claims',
      'delete_records',
      'view_reports',
      'manage_settings',
    ],
    [USER_ROLES.MANAGER]: [
      'approve_claims',
      'view_reports',
      'manage_bookings',
    ],
    [USER_ROLES.USER]: [
      'view_own_data',
      'create_bookings',
      'submit_claims',
    ],
  };
  return permissions[role] || [];
};

export const hasPermission = (user, permission) => {
  if (!user || !user.role) return false;
  const userPermissions = getRolePermissions(user.role);
  return userPermissions.includes(permission);
};