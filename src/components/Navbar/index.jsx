import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Button from '../Button';
import BurgerBtn from './BurgerBtn';
import { LogoWrapper, NavbarWrapper, NavItemsWapper, OptionsWrapper } from './NavbarElement';

const Navbar = (props) => {
  const burgerChange = (e) => {
    if (e.target.checked) {
      props.sidebarOpen(true);
    } else {
      props.sidebarOpen(false);
    }
  };

  return (
    <header>
      <NavbarWrapper variant={props.variant} bgColor={props.bgColor}>
        <NavItemsWapper>
          <LogoWrapper>
            <Link to={`/`}>
              <img alt="acy" src="https://acyhk.com/images/common/logo.svg" />
            </Link>
            <OptionsWrapper>
              {props.children}  
            </OptionsWrapper>
          </LogoWrapper>
          <Button variant='outlined' p={`.5rem 1rem`} link to={`/login`}>
            Login
          </Button>
        </NavItemsWapper>
        <BurgerBtn onChange={burgerChange} checked={props.opened} />
      </NavbarWrapper>
    </header>
  )
};
Navbar.propTypes = {
  bgColor: PropTypes.string,
  variant: PropTypes.string,
  opened: PropTypes.bool,
  sidebarOpen: PropTypes.func,
}

export default Navbar;

