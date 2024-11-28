import styled from "styled-components";
import PropTypes from "prop-types";

const Icon1 = styled.img`height: 24px;
  width: 24px;
  position: relative;
  overflow: ${(p) => p.iconOverflow}
  margin: ${(p) => p.iconMargin}
`;
const StateLayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
`;
const Container = styled.div`
  border-radius: var(--br-81xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MenuRoot = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconButton = ({
  className = "",
  state = "Disabled",
  style = "Outlined",
  showMenu,
  icon,
  iconOverflow,
  iconMargin,
}) => {
  return (
    showMenu && (
      <MenuRoot data-state={state} data-style={style} className={className}>
        <Container>
          <StateLayer>
            <Icon1
              loading="lazy"
              alt=""
              src={icon}
              iconOverflow={iconOverflow}
              iconMargin={iconMargin}
            />
          </StateLayer>
        </Container>
      </MenuRoot>
    )
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  showMenu: PropTypes.bool,
  icon: PropTypes.string,

  /** Variant props */
  state: PropTypes.number,
  style: PropTypes.number,

  /** Style props */
  iconOverflow: PropTypes.string,
  iconMargin: PropTypes.string,
};

export default IconButton;
