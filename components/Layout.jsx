import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, isAdmin }) => {
  return (
    <div>
      {isAdmin ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Layout;
