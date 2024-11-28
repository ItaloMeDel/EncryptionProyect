import styled from "styled-components";
import PropTypes from "prop-types";

const Icon = styled.img`
  height: 18px;
  width: 18px;
  position: relative;
`;
const ChipLabel = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 500;
`;
const StateLayer = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xs) var(--padding-base) var(--padding-7xs)
    var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-5xs);
`;
const AssistiveChipRoot = styled.div`
  box-shadow: var(--m3-elevation-light-1);
  border-radius: var(--br-5xs);
  background-color: var(--schemes-surface-container-low);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--m3-title-small-size);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
`;

const AssistiveChip = ({
  className = "",
  configuration = "Label & brand icon",
  state = "Disabled",
  style = "Elevated",
  labelText = "Agregar a mis conocidos",
}) => {
  return (
    <AssistiveChipRoot
      data-configuration={configuration}
      data-state={state}
      data-style={style}
      className={className}
    >
      <StateLayer>
        <Icon loading="lazy" alt="" src="/icon-21.svg" />
        <ChipLabel>{labelText}</ChipLabel>
      </StateLayer>
    </AssistiveChipRoot>
  );
};

AssistiveChip.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,

  /** Variant props */
  configuration: PropTypes.number,
  state: PropTypes.number,
  style: PropTypes.number,
};

export default AssistiveChip;
