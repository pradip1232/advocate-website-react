import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHeader from '../components/NavbarHeader';
import Footer from '../components/Footer';

const PublicLayout = () => {
  return (
    <>
      <NavbarHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;