import IconButton from "./IconButton";
import styled from "styled-components";
import PropTypes from "prop-types";

const SupportingText = styled.div`
  position: relative;
  letter-spacing: 0.5px;
  line-height: 24px;
  display: none;
`;
const Content = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const TrailingElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const StateLayer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  gap: var(--gap-9xs);
`;
const SearchBarRoot = styled.div`
  flex: 1;
  border-radius: var(--br-9xl);
  background-color: var(--schemes-surface-container-high);
  height: 56px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--m3-body-large-size);
  color: var(--schemes-on-surface-variant);
  font-family: var(--m3-title-small);
`;

const SearchBar = ({
  className = "",
  showAvatar = true,
  state = "Pressed",
  show2ndTrailingIcon = false,
  show1stTrailingIcon = true,
  placeholderText = "Hinted search text",
}) => {
  return (
    <SearchBarRoot
      data-showAvatar={showAvatar}
      data-state={state}
      className={className}
    >
      <StateLayer>
        <IconButton
          state="Enabled"
          style="Standard"
          showMenu
          icon="/icon-31.svg"
          iconOverflow="unset"
          iconMargin="unset"
        />
        <Content>
          <SupportingText>{placeholderText}</SupportingText>
        </Content>
        <TrailingElements>
          {show1stTrailingIcon && (
            <IconButton
              state="Enabled"
              style="Standard"
              showMenu
              icon="/icon-4.svg"
              iconOverflow="unset"
              iconMargin="unset"
            />
          )}
          {show2ndTrailingIcon && (
            <IconButton
              state="Enabled"
              style="Standard"
              showMenu={false}
              iconOverflow="unset"
              iconMargin="0"
            />
          )}
        </TrailingElements>
      </StateLayer>
    </SearchBarRoot>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  show2ndTrailingIcon: PropTypes.bool,
  show1stTrailingIcon: PropTypes.bool,
  placeholderText: PropTypes.string,

  /** Variant props */
  showAvatar: PropTypes.bool,
  state: PropTypes.number,
};

export default SearchBar;
