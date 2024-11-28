import BuildingBlocksSegmentedButt from "./BuildingBlocksSegmentedButt";
import BuildingBlocksSegmentedButt1 from "./BuildingBlocksSegmentedButt1";
import styled from "styled-components";
import PropTypes from "prop-types";

const SegmentedButtonRoot = styled.div`
  width: 253px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--m3-title-small-size);
  color: var(--schemes-on-secondary-container);
  font-family: var(--m3-title-small);
`;

const SegmentedButton = ({ className = "", density = -3, segments = 5 }) => {
  return (
    <SegmentedButtonRoot
      data-density={density}
      data-segments={segments}
      className={className}
    >
      <BuildingBlocksSegmentedButt
        configuration="Label only"
        selected
        state="Enabled"
        labelText="Públicos"
      />
      <BuildingBlocksSegmentedButt1
        configuration="Label only"
        selected={false}
        state="Enabled"
        labelText="Privados"
      />
    </SegmentedButtonRoot>
  );
};

SegmentedButton.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  density: PropTypes.number,
  segments: PropTypes.number,
};

export default SegmentedButton;
