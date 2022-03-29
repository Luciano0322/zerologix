import PropTypes from "prop-types";

const Dialog = (props) => {
  return (
    <dialog open={props.open}>
      <h3>{props.title}</h3>
    </dialog>
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
};


export default Dialog;