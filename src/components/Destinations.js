import BuildingBlocksNavItem from "./BuildingBlocksNavItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const DestinationsRoot = styled.div`
  width: 80px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  text-align: center;
  font-size: var(--m3-body-small-size);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
`;

const Destinations = ({ className = "" }) => {
  return (
    <DestinationsRoot className={className}>
      <BuildingBlocksNavItem
        badge="None"
        label
        selected
        state="Enabled"
        labelText={`Mis
carpetas`}
        showNavItem1
        showContainer
        icon="/icon-2.svg"
      />
      <BuildingBlocksNavItem
        badge="None"
        label
        selected={false}
        state="Enabled"
        labelText="Mis compartidos"
        showNavItem1
        navItem1Height="unset"
        navItem1AlignSelf="stretch"
        navItem1Width="unset"
        showContainer
        icon="/icon-3.svg"
        labelAlignSelf="stretch"
        labelWidth="unset"
        labelHeight="unset"
        labelDisplay="unset"
      />
      <BuildingBlocksNavItem
        badge="None"
        label
        selected={false}
        state="Enabled"
        labelText="Generar token"
        showNavItem1
        navItem1Height="unset"
        navItem1AlignSelf="stretch"
        navItem1Width="unset"
        showContainer
        icon="/icon-3.svg"
        labelAlignSelf="stretch"
        labelWidth="unset"
        labelHeight="unset"
        labelDisplay="unset"
      />
      <BuildingBlocksNavItem
        badge="None"
        label
        selected={false}
        state="Enabled"
        labelText="Confg"
        showNavItem1
        navItem1Height="unset"
        navItem1AlignSelf="unset"
        navItem1Width="unset"
        showContainer
        icon="/icon-3.svg"
        labelAlignSelf="stretch"
        labelWidth="unset"
        labelHeight="unset"
        labelDisplay="unset"
      />
      <BuildingBlocksNavItem
        badge="None"
        label
        selected={false}
        state="Enabled"
        labelText="Label"
        showNavItem1={false}
        navItem1Height="unset"
        navItem1AlignSelf="unset"
        navItem1Width="80px"
        showContainer
        icon="/icon-3.svg"
        labelAlignSelf="unset"
        labelWidth="76px"
        labelHeight="16px"
        labelDisplay="inline-block"
      />
      <BuildingBlocksNavItem
        badge="None"
        label
        selected={false}
        state="Enabled"
        labelText="Label"
        showNavItem1={false}
        navItem1Height="unset"
        navItem1AlignSelf="unset"
        navItem1Width="80px"
        showContainer
        icon="/icon-3.svg"
        labelAlignSelf="unset"
        labelWidth="76px"
        labelHeight="16px"
        labelDisplay="inline-block"
      />
      <BuildingBlocksNavItem
        badge="None"
        label
        selected={false}
        state="Enabled"
        labelText="Label"
        showNavItem1={false}
        navItem1Height="unset"
        navItem1AlignSelf="unset"
        navItem1Width="80px"
        showContainer
        icon="/icon-3.svg"
        labelAlignSelf="unset"
        labelWidth="76px"
        labelHeight="16px"
        labelDisplay="inline-block"
      />
    </DestinationsRoot>
  );
};

Destinations.propTypes = {
  className: PropTypes.string,
};

export default Destinations;
