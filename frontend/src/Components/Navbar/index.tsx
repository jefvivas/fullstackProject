import { NavLink } from "react-router-dom";
import { NavbarContainer, NavList, NavItem } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Criar Usuário</NavLink>
          <NavLink to="/users">Todos Usuários</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
