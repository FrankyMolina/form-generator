import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="Navbar__container">
      <Link to="/">form generator</Link>
      <Link to="/form-to-fill">form created</Link>
      <Link to="form-filled">form info</Link>
    </div>
  );
}
