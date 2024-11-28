import styled from "styled-components";
import PropTypes from "prop-types";

const Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const StateLayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const FabRoot = styled.div`
  box-shadow: var(--m3-elevation-light-3);
  border-radius: var(--br-base);
  background-color: var(--schemes-tertiary-container);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FAB = ({ className = "", state = "Pressed", style = "Tertiary" }) => {
  return (
    <FabRoot data-state={state} data-style={style} className={className}>
      <StateLayer>
        <Icon loading="lazy" alt="" src="/icon-1.svg" />
      </StateLayer>
    </FabRoot>
  );
};

FAB.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  state: PropTypes.number,
  style: PropTypes.number,
};

export default FAB;
