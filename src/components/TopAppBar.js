import IconButton from "./IconButton";
import styled from "styled-components";
import PropTypes from "prop-types";

const TrailingIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const LeadingTrailingIcons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-5xs) var(--padding-xs) 0px;
`;
const Headline = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 36px;
  font-weight: 400;
  font-family: inherit;
`;
const Headline1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
`;
const TopAppBarRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-9xl);
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--font-size-9xl);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
`;

const TopAppBar = ({
  className = "",
  configuration = "Small centered",
  elevation = "flat",
  show3rdTrailingIcon = true,
  show1stTrailingIcon = false,
  show2ndTrailingIcon = false,
  headline = "Mis carpetas",
}) => {
  return (
    <TopAppBarRoot
      data-configuration={configuration}
      data-elevation={elevation}
      className={className}
    >
      <LeadingTrailingIcons>
        <IconButton
          state="Enabled"
          style="Standard"
          showMenu
          icon="/icon-9.svg"
          iconOverflow="unset"
          iconMargin="unset"
        />
        <TrailingIcon>
          <IconButton
            state="Enabled"
            style="Standard"
            showMenu={false}
            icon="/icon-10.svg"
            iconOverflow="unset"
            iconMargin="unset"
          />
          <IconButton
            state="Enabled"
            style="Standard"
            showMenu={false}
            icon="/icon-11.svg"
            iconOverflow="unset"
            iconMargin="unset"
          />
          <IconButton
            state="Enabled"
            style="Standard"
            showMenu
            icon="/icon-12.svg"
            iconOverflow="unset"
            iconMargin="unset"
          />
        </TrailingIcon>
      </LeadingTrailingIcons>
      <Headline1>
        <Headline>{headline}</Headline>
      </Headline1>
    </TopAppBarRoot>
  );
};

TopAppBar.propTypes = {
  className: PropTypes.string,
  show3rdTrailingIcon: PropTypes.bool,
  show1stTrailingIcon: PropTypes.bool,
  show2ndTrailingIcon: PropTypes.bool,
  headline: PropTypes.string,

  /** Variant props */
  configuration: PropTypes.number,
  elevation: PropTypes.number,
};

export default TopAppBar;
