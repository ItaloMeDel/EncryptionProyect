import styled from "styled-components";
import PropTypes from "prop-types";

const SelectedIcon = styled.img`
  width: 18px;
  position: relative;
  height: 18px;
`;
const SegmentLabel = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 500;
`;
const StateLayer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xs);
  gap: var(--gap-5xs);
`;
const Container = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-81xl) 0px 0px var(--br-81xl);
  background-color: var(--schemes-secondary-container);
  border: 1px solid var(--schemes-outline);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SegmentStartRoot = styled.div`
  flex: 1;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) 0px;
  box-sizing: border-box;
  text-align: center;
  font-size: var(--m3-title-small-size);
  color: var(--schemes-on-secondary-container);
  font-family: var(--m3-title-small);
`;

const BuildingBlocksSegmentedButt = ({
  className = "",
  configuration = "Icon only",
  selected = false,
  state = "Disabled",
  labelText = "Públicos",
}) => {
  return (
    <SegmentStartRoot
      data-configuration={configuration}
      data-selected={selected}
      data-state={state}
      className={className}
    >
      <Container>
        <StateLayer>
          <SelectedIcon alt="" src="/selected-icon.svg" />
          <SegmentLabel>{labelText}</SegmentLabel>
        </StateLayer>
      </Container>
    </SegmentStartRoot>
  );
};

BuildingBlocksSegmentedButt.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,

  /** Variant props */
  configuration: PropTypes.number,
  selected: PropTypes.bool,
  state: PropTypes.number,
};

export default BuildingBlocksSegmentedButt;
