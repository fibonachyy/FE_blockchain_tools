import React, { FC } from 'react';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
