import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper } from '../../components/styles/components/Navbar';

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
