import styled from "styled-components";
import PropTypes from "prop-types";

const ThumbnailIcon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const BuildingBlocksimageThumbnaiRoot = styled.div`
  width: 40px;
  border-radius: var(--br-81xl);
  background-color: var(--schemes-primary-container);
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const BuildingBlocksimageThumbnai = ({
  className = "",
  condition = "1 line",
  leading = "Switch",
  showOverline = true,
  showSupportingText = false,
  trailing = "Icon",
}) => {
  return (
    <BuildingBlocksimageThumbnaiRoot
      data-condition={condition}
      data-leading={leading}
      data-showOverline={showOverline}
      data-showSupportingText={showSupportingText}
      data-trailing={trailing}
      className={className}
    >
      <ThumbnailIcon loading="lazy" alt="" src="/thumbnail@2x.png" />
    </BuildingBlocksimageThumbnaiRoot>
  );
};

BuildingBlocksimageThumbnai.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  condition: PropTypes.number,
  leading: PropTypes.number,
  showOverline: PropTypes.bool,
  showSupportingText: PropTypes.bool,
  trailing: PropTypes.number,
};

export default BuildingBlocksimageThumbnai;
