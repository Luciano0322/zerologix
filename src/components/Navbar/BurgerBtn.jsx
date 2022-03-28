import PropTypes from "prop-types";
import { BurgerWrapper } from "./NavbarElement";

const BurgerBtn = (props) => {
  return (
    <div>
      <BurgerWrapper htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={props.checked}
          onChange={props.onChange}
        />
        <span></span>
        <span></span>
        <span></span>
      </BurgerWrapper>
    </div>
  );
};

BurgerBtn.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default BurgerBtn;