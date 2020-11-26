import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import './Layout.scss';

export default function Layout({ children }) {
  return (
    <div className="Layout__container">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
