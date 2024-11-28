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
  padding: var(--padding-9xs) var(--padding-base);
`;
const Container = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--schemes-secondary-container);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Label1 = styled.div`align-self: stretch;
  position: relative;
  letter-spacing: 0.5px;
  line-height: 16px;
  font-weight: 600;
  align-self: ${(p) => p.labelAlignSelf}
  width: ${(p) => p.labelWidth}
  height: ${(p) => p.labelHeight}
  display: ${(p) => p.labelDisplay}
`;
const Root = styled.div`align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) var(--padding-9xs);
  gap: var(--gap-9xs);
  text-align: center;
  font-size: var(--m3-body-small-size);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
  &[data-badge='None'][data-label='true'][data-selected='false'][data-state='Enabled'] .container {
  background-color: unset;
  flex-direction: column;
  }
  &[data-badge='None'][data-label='true'][data-selected='false'][data-state='Enabled'] .label {
  font-weight: 500;
  color: var(--schemes-on-surface-variant);
  opacity: 0.9;
  }
  height: ${(p) => p.navItem1Height}
  align-self: ${(p) => p.navItem1AlignSelf}
  width: ${(p) => p.navItem1Width}
`;

const BuildingBlocksNavItem = ({
  className = "",
  badge = "None",
  label = false,
  selected = false,
  state = "Enabled",
  labelText = "Mis\ncarpetas",
  showNavItem1,
  navItem1Height,
  navItem1AlignSelf,
  navItem1Width,
  showContainer,
  icon,
  labelAlignSelf,
  labelWidth,
  labelHeight,
  labelDisplay,
}) => {
  return (
    showNavItem1 && (
      <Root
        data-badge={badge}
        data-label={label}
        data-selected={selected}
        data-state={state}
        navItem1Height={navItem1Height}
        navItem1AlignSelf={navItem1AlignSelf}
        navItem1Width={navItem1Width}
        className={className}
      >
        {showContainer && (
          <Container className="container">
            <StateLayer>
              <Icon loading="lazy" alt="" src={icon} />
            </StateLayer>
          </Container>
        )}
        <Label1
          className="label"
          labelAlignSelf={labelAlignSelf}
          labelWidth={labelWidth}
          labelHeight={labelHeight}
          labelDisplay={labelDisplay}
        >
          {labelText}
        </Label1>
      </Root>
    )
  );
};

BuildingBlocksNavItem.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  showNavItem1: PropTypes.bool,
  showContainer: PropTypes.bool,
  icon: PropTypes.string,

  /** Variant props */
  badge: PropTypes.number,
  label: PropTypes.bool,
  selected: PropTypes.bool,
  state: PropTypes.number,

  /** Style props */
  navItem1Height: PropTypes.string,
  navItem1AlignSelf: PropTypes.string,
  navItem1Width: PropTypes.string,
  labelAlignSelf: PropTypes.string,
  labelWidth: PropTypes.string,
  labelHeight: PropTypes.string,
  labelDisplay: PropTypes.string,
};

export default BuildingBlocksNavItem;
