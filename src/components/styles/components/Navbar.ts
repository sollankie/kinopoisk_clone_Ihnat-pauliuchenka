import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background-color: #333;
  padding: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-right: 1rem;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
