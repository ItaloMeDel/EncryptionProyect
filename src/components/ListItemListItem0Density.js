import styled from "styled-components";
import BuildingBlocksimageThumbnai from "./BuildingBlocksimageThumbnai";
import HorizontalFullWidth from "./HorizontalFullWidth";
import PropTypes from "prop-types";

const StateLayerOverlay = styled.div`
  width: 100%;
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  z-index: 0;
`;
const LeadingElement = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Overline = styled.div`
  width: 264px;
  position: relative;
  letter-spacing: 0.5px;
  line-height: 16px;
  font-weight: 500;
  display: none;
`;
const Headline = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--m3-body-large-size);
  letter-spacing: 0.5px;
  line-height: 24px;
  color: var(--schemes-on-surface);
`;
const SupportingText = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--m3-title-small-size);
  letter-spacing: 0.25px;
  line-height: 20px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
  flex-shrink: 0;
`;
const Content = styled.div`
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const TrailingSupportingText = styled.div`
  position: relative;
  font-size: var(--m3-label-small-size);
  letter-spacing: 0.5px;
  line-height: 16px;
  font-weight: 500;
  color: var(--schemes-on-secondary-container);
  text-align: right;
  color: ${(p) => p.trailingSupportingTextColor};
`;
const StateLayer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  gap: var(--gap-base);
  z-index: 1;
`;
const ListItemRoot = styled.div`align-self: stretch;
  background-color: var(--schemes-secondary-container);
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 72px;
  text-align: left;
  font-size: var(--m3-body-small-size);
  color: var(--schemes-on-surface-variant);
  font-family: var(--m3-title-small);
  background-color: ${(p) => p.listItem01BackgroundColor}
  border-radius: ${(p) => p.listItem01BorderRadius}
`;

const ListItemListItem0Density = ({
  className = "",
  condition = "1 line",
  leading = "Switch",
  showOverline = true,
  showSupportingText = false,
  trailing = "Icon",
  trailingSupportingText = "1 min",
  showLeadingAvatar = true,
  overline = "Overline",
  showTrailingSupportingText = true,
  supportingText = "Supporting line text lorem ipsum dolor sit amet, consectetur.",
  headline = "José",
  showDivider = false,
  listItem01BackgroundColor,
  listItem01BorderRadius,
  trailingSupportingTextColor,
}) => {
  return (
    <ListItemRoot
      data-condition={condition}
      data-leading={leading}
      data-showOverline={showOverline}
      data-showSupportingText={showSupportingText}
      data-trailing={trailing}
      listItem01BackgroundColor={listItem01BackgroundColor}
      listItem01BorderRadius={listItem01BorderRadius}
      className={className}
    >
      <StateLayerOverlay />
      <StateLayer>
        <LeadingElement>
          {showLeadingAvatar && (
            <BuildingBlocksimageThumbnai
              condition="2 line"
              leading="Monogram"
              showOverline={false}
              showSupportingText
              trailing="None"
            />
          )}
        </LeadingElement>
        <Content>
          <Overline>{overline}</Overline>
          <Headline>{headline}</Headline>
          <SupportingText>{supportingText}</SupportingText>
        </Content>
        {showTrailingSupportingText && (
          <TrailingSupportingText
            trailingSupportingTextColor={trailingSupportingTextColor}
          >
            {trailingSupportingText}
          </TrailingSupportingText>
        )}
      </StateLayer>
      {showDivider && (
        <HorizontalFullWidth
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
        />
      )}
    </ListItemRoot>
  );
};

ListItemListItem0Density.propTypes = {
  className: PropTypes.string,
  trailingSupportingText: PropTypes.string,
  showLeadingAvatar: PropTypes.bool,
  overline: PropTypes.string,
  showTrailingSupportingText: PropTypes.bool,
  supportingText: PropTypes.string,
  headline: PropTypes.string,
  showDivider: PropTypes.bool,

  /** Variant props */
  condition: PropTypes.number,
  leading: PropTypes.number,
  showOverline: PropTypes.bool,
  showSupportingText: PropTypes.bool,
  trailing: PropTypes.number,

  /** Style props */
  listItem01BackgroundColor: PropTypes.string,
  listItem01BorderRadius: PropTypes.string,
  trailingSupportingTextColor: PropTypes.string,
};

export default ListItemListItem0Density;
