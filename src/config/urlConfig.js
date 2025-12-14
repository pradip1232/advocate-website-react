// URL Configuration for routing
export const routes = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  bookings: '/bookings',
  claims: '/claims',
  vouchers: '/vouchers',
  userManagement: '/user-management',
  changePassword: '/change-password',
  notFound: '/404',
};

export const publicRoutes = [
  routes.login,
  routes.notFound,
];

export const privateRoutes = [
  routes.dashboard,
  routes.bookings,
  routes.claims,
  routes.vouchers,
  routes.userManagement,
  routes.changePassword,
];

export const navigationConfig = {
  sidebar: [
    {
      label: 'Dashboard',
      path: routes.dashboard,
      icon: 'home',
    },
    {
      label: 'Bookings',
      path: routes.bookings,
      icon: 'calendar',
    },
    {
      label: 'Claims',
      path: routes.claims,
      icon: 'file-text',
    },
    {
      label: 'Vouchers',
      path: routes.vouchers,
      icon: 'credit-card',
    },
    {
      label: 'User Management',
      path: routes.userManagement,
      icon: 'users',
    },
  ],
};