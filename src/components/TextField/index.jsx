import PropTypes from "prop-types";
import { HelperText, InputLabel, InputWrapper, InuptField } from "./TextFieldElements";

const randomId = () => {
  return Number(Math.random() * 100).toString();
};

const TextField = (props) => {
  const defaultId = randomId();
  return (
    <InputWrapper fullWidth={props.fullWidth}>
      <InuptField
        id={props.id || defaultId}
        value={props.value}
        name={props.name}
        color={props.color}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        type={props.type}
        error={props.error}
        fullWidth={props.fullWidth}
      />
      {/* 這裡也是因為Mui的CSS效果才將label後移 */}
      <InputLabel
        htmlFor={props.id || defaultId}
        color={props.color}
        error={props.error}
      >
        {props.label}
      </InputLabel>
      <HelperText error={props.error}>{props.helperTxt}</HelperText>
    </InputWrapper>
  );
};

TextField.propTypes = {
  label: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.node,
  color: PropTypes.string,
  helperTxt: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default TextField;