import PropTypes from "prop-types";
import { SelectHelperText, SelectLabel, SelectMain, SelectWrapper } from "./SelectElements";

const randomId = () => {
  return Number(Math.random() * 100).toString();
};

const Select = (props) => {
  const defaultId = randomId();
  return (
    <SelectWrapper fullWidth={props.fullWidth}>
      <SelectMain
        id={props.id || defaultId}
        value={props.value}
        name={props.name}
        color={props.color}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        error={props.error}
        fullWidth={props.fullWidth}
      >
        {props.children}
      </SelectMain>
      {/* 這裡也是因為Mui的CSS效果才將label後移 */}
      <SelectLabel
        htmlFor={props.id || defaultId}
        color={props.color}
        error={props.error}
      >
        {props.label}
      </SelectLabel>
      <SelectHelperText error={props.error}>{props.helperTxt}</SelectHelperText>
    </SelectWrapper>
  );
};

Select.propTypes = {
  label: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.node,
  color: PropTypes.string,
  helperTxt: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Select;