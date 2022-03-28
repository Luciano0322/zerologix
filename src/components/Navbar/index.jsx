import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import BurgerBtn from './BurgerBtn';
import { LogoWrapper, NavbarWrapper, NavItemsWapper } from './NavbarElement';

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
            {props.children}
          </LogoWrapper>
          
        </NavItemsWapper>
        <BurgerBtn onChange={burgerChange} checked={props.opened} />
      </NavbarWrapper>
    </header>
  )
};
Navbar.propTypes = {
  bgColor: PropTypes.string,
  variant: PropTypes.string,
  opened: PropTypes.bool
}

export default Navbar;

