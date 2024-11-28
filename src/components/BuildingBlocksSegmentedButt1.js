import styled from "styled-components";
import PropTypes from "prop-types";

const LabelText = styled.div`
  position: relative;
  font-size: var(--m3-title-small-size);
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 500;
  font-family: var(--m3-title-small);
  color: var(--schemes-on-surface);
  text-align: center;
`;
const StateLayer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xs);
`;
const Container = styled.button`
  cursor: pointer;
  border: 1px solid var(--schemes-outline);
  padding: 0;
  background-color: transparent;
  align-self: stretch;
  flex: 1;
  border-radius: 0px var(--br-81xl) var(--br-81xl) 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SegmentEndRoot = styled.div`
  flex: 1;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) 0px;
  box-sizing: border-box;
  margin-left: -1px;
`;

const BuildingBlocksSegmentedButt1 = ({
  className = "",
  configuration = "Icon only",
  selected = false,
  state = "Disabled",
  labelText = "Privados",
}) => {
  return (
    <SegmentEndRoot
      data-configuration={configuration}
      data-selected={selected}
      data-state={state}
      className={className}
    >
      <Container>
        <StateLayer>
          <LabelText>{labelText}</LabelText>
        </StateLayer>
      </Container>
    </SegmentEndRoot>
  );
};

BuildingBlocksSegmentedButt1.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,

  /** Variant props */
  configuration: PropTypes.number,
  selected: PropTypes.bool,
  state: PropTypes.number,
};

export default BuildingBlocksSegmentedButt1;
