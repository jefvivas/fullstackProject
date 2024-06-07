import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #f8f8f8;
  padding: 15px;
  border: 1px solid #ccc;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 15px;

  a {
    color: #53514e;
    font-weight: bold;
    font-size: 16px;
    margin-right: 20px;
    padding: 5px;

    &:hover {
      color: #00c8b3;
    }
  }
`;
