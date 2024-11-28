import styled from "styled-components";
import PropTypes from "prop-types";

const Divider = styled.div`
  align-self: stretch;
  position: relative;
  border-top: 1px solid var(--schemes-outline-variant);
  box-sizing: border-box;
  height: 1px;
`;
const DividerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-base);
`;

const HorizontalMiddleInset = ({ className = "" }) => {
  return (
    <DividerRoot className={className}>
      <Divider />
    </DividerRoot>
  );
};

HorizontalMiddleInset.propTypes = {
  className: PropTypes.string,
};

export default HorizontalMiddleInset;
