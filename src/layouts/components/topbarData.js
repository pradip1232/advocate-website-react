import { FaBell, FaUser, FaCog } from 'react-icons/fa';

export const topbarData = {
  title: 'Law Firm Dashboard',
  actions: [
    {
      label: 'Notifications',
      icon: FaBell,
      variant: 'outline-light',
      onClick: () => console.log('Notifications clicked'),
    },
    {
      label: 'Profile',
      icon: FaUser,
      variant: 'outline-light',
      onClick: () => console.log('Profile clicked'),
    },
    {
      label: 'Settings',
      icon: FaCog,
      variant: 'outline-light',
      onClick: () => console.log('Settings clicked'),
    },
  ],
};