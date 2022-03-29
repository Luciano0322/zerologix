import { BoxWrapper } from "./BoxElement";

const Box = (props) => {
  return (
    <BoxWrapper
      p={props.p}
      m={props.m}
      display={props.display}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexWrap={props.flexWrap}
      width={props.width}
    >
      {props.children}
    </BoxWrapper>
  );
};

export default Box;