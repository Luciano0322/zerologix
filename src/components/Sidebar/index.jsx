import { SidebarContainer } from "./SidebarElements";
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  return (
    <SidebarContainer 
      opened={props.opened}
      bgColor={props.bgColor}
    >
      {props.children}
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  bgColor: PropTypes.string,
  opened: PropTypes.bool,
}

export default Sidebar;
