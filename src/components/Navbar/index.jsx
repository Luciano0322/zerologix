import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Button from '../Button';
import BurgerBtn from './BurgerBtn';
import { useDispatch, useSelector } from 'react-redux';
import { LogoWrapper, NavbarWrapper, NavItemsWapper, OptionsWrapper } from './NavbarElement';
import { logout } from '../../action/auth';

const Navbar = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  // console.log(user);
  const burgerChange = (e) => {
    if (e.target.checked) {
      props.sidebarOpen(true);
    } else {
      props.sidebarOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout()).then(() => alert('成功登出'))
  }

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
          {isLoggedIn && 
            <Button variant='outlined' p={`.5rem 1rem`} onClick={handleLogout}>
              Logout
            </Button>
          }
          <div style={isLoggedIn ? {display: 'none'} : {}}>
            <Button variant='outlined' p={`.5rem 1rem`} link to={`/login`}>
              Login
            </Button>
          </div>
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

