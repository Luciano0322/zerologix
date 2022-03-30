import { BoxWrapper } from "./BoxElement";
import PropTypes from "prop-types";

const Box = (props) => {
  return (
    <BoxWrapper
      id={props.id}
      p={props.p}
      m={props.m}
      display={props.display}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexWrap={props.flexWrap}
      width={props.width}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      flexDirection={props.flexDirection}
      bgColor={props.bgColor}
    >
      {props.children}
    </BoxWrapper>
  );
};

Box.propTypes = {
  id: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.any,
  minWidth: PropTypes.any,
  flexDirection: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Box;