import { NavLink } from "react-router-dom";
import { NavbarContainer, NavList, NavItem } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/client-signup">Criar Client</NavLink>
          <NavLink to="/clients">Todos Clientes</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
