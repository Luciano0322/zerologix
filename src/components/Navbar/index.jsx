import PropTypes from 'prop-types'
import { NavbarWrapper, OptionsWapper } from './NavbarElement';

const Navbar = (props) => {

  return (
    <header>
      <NavbarWrapper variant={props.variant} bgColor={props.bgColor}>
        <OptionsWapper>{props.children}</OptionsWapper>
        {/* <BurgerBtn onChange={burgerChange} checked={props.opened} /> */}
      </NavbarWrapper>
    </header>
  )
};
Navbar.propTypes = {
  bgColor: PropTypes.string,
  variant: PropTypes.string,
}

export default Navbar;

