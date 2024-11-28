import styled from "styled-components";
import PropTypes from "prop-types";

const Divider1 = styled.div`
  align-self: stretch;
  position: relative;
  border-top: 1px solid var(--schemes-outline-variant);
  box-sizing: border-box;
  height: 1px;
`;
const DividerRoot = styled.div`
  width: 360px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 2;
  display: ${(p) => p.dividerDisplay};
`;

const HorizontalFullWidth = ({
  className = "",
  condition = "1 line",
  leading = "Switch",
  showOverline = true,
  showSupportingText = false,
  trailing = "Icon",
  dividerDisplay,
}) => {
  return (
    <DividerRoot
      data-condition={condition}
      data-leading={leading}
      data-showOverline={showOverline}
      data-showSupportingText={showSupportingText}
      data-trailing={trailing}
      dividerDisplay={dividerDisplay}
      className={className}
    >
      <Divider1 />
    </DividerRoot>
  );
};

HorizontalFullWidth.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  condition: PropTypes.number,
  leading: PropTypes.number,
  showOverline: PropTypes.bool,
  showSupportingText: PropTypes.bool,
  trailing: PropTypes.number,

  /** Style props */
  dividerDisplay: PropTypes.string,
};

export default HorizontalFullWidth;
