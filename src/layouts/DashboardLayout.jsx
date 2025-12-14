import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './DashboardLayout.scss';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-layout__main">
        <Topbar />
        <div className="dashboard-layout__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;