import PropTypes from "prop-types";
import Button from "../Button";

const Dialog = (props) => {
  const handleClose = () => {
    
    props.changeFn({open: false, title: "" })
  }
  return (
    <dialog open={props.data?.open}>
      <h3>{props.data?.title}</h3>
      <Button
        variant="containted"
        p={`.75rem`}
        onClick={handleClose}
      >
        關閉
      </Button>
    </dialog>
  );
};

Dialog.propTypes = {
  data: PropTypes.object,
  changeFn: PropTypes.func,
};


export default Dialog;