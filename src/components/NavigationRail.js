import IconButton from "./IconButton";
import FAB from "./FAB";
import styled from "styled-components";
import Destinations from "./Destinations";
import PropTypes from "prop-types";

const FabElevationOverride = styled.div`
  border-radius: var(--br-base);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MenuFab = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const NavigationRailRoot = styled.div`width: 88px;
  height: 709px;
  background-color: var(--schemes-surface);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-25xl) 0px var(--padding-37xl);
  box-sizing: border-box;
  gap: var(--gap-21xl);
  z-index: 2;
  text-align: center;
  font-size: var(--m3-body-small-size);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
  width: ${(p) => p.navigationRailWidth}
  margin-left: ${(p) => p.navigationRailMarginLeft}
`;

const NavigationRail = ({
  className = "",
  alignment = "Top",
  fAB = true,
  navigationRailWidth,
  navigationRailMarginLeft,
  showDestinations,
}) => {
  return (
    <NavigationRailRoot
      data-alignment={alignment}
      navigationRailWidth={navigationRailWidth}
      navigationRailMarginLeft={navigationRailMarginLeft}
      className={className}
    >
      <MenuFab>
        <IconButton
          state="Enabled"
          style="Standard"
          showMenu
          icon="/icon.svg"
        />
        {fAB && (
          <FabElevationOverride>
            <FAB state="Enabled" style="Tertiary" />
          </FabElevationOverride>
        )}
      </MenuFab>
      {showDestinations && <Destinations />}
    </NavigationRailRoot>
  );
};

NavigationRail.propTypes = {
  className: PropTypes.string,
  fAB: PropTypes.bool,
  showDestinations: PropTypes.bool,

  /** Variant props */
  alignment: PropTypes.number,

  /** Style props */
  navigationRailWidth: PropTypes.string,
  navigationRailMarginLeft: PropTypes.string,
};

export default NavigationRail;
