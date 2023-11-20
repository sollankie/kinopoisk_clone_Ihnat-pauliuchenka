import React, { ReactNode } from 'react';
import { GlobalStyle } from '../styles/globalStyles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        {/* Your header content, including the Search component */}
      </header>
      <div style={{ display: 'flex' }}>
        <nav>
          {/* Your Navbar component */}
        </nav>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
