import styled from "styled-components";
import PropTypes from "prop-types";

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BrowserActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const BrowserActionButtons1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-9xs) 0px 0px;
`;
const LockIcon = styled.img`
  width: 15.4px;
  height: 15.4px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const LockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-3) 0px 0px;
`;
const Text1 = styled.input`
  width: calc(100% - 35.4px);
  border: none;
  outline: none;
  font-family: var(--m3-title-small);
  font-size: var(--m3-body-large-size);
  background-color: transparent;
  flex: 1;
  position: relative;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: var(--schemes-on-surface);
  text-align: left;
  display: inline-block;
  min-width: 250px;
  padding: 0;
  max-width: 100%;
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const StarIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const StarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const AddressBar = styled.div`
  align-self: stretch;
  border-radius: var(--br-27xl-1);
  background-color: var(--schemes-surface-container);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
`;
const AddressBarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const M = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: inherit;
`;
const Avatar = styled.div`
  border-radius: var(--br-90xl-1);
  background-color: var(--schemes-outline);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-8) var(--padding-7xs) var(--padding-11xs-2)
    var(--padding-6xs);
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-9xs) 0px 0px;
`;
const ChromeBrowserBarRoot = styled.header`
  width: 905px;
  box-shadow: 0px -0.6px 0px rgba(0, 0, 0, 0.05) inset,
    0px 0.6px 0px rgba(0, 0, 0, 0.15);
  background-color: var(--schemes-surface);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-xs);
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: center;
  font-size: var(--m3-body-large-size);
  color: var(--schemes-surface-container-lowest);
  font-family: var(--m3-title-small);
`;

const ChromeBrowserBar = ({ className = "" }) => {
  return (
    <ChromeBrowserBarRoot className={className}>
      <BrowserActionButtons>
        <BackIcon loading="lazy" alt="" src="/back.svg" />
      </BrowserActionButtons>
      <BrowserActionButtons>
        <BackIcon loading="lazy" alt="" src="/forward.svg" />
      </BrowserActionButtons>
      <BrowserActionButtons1>
        <BackIcon loading="lazy" alt="" src="/refresh.svg" />
      </BrowserActionButtons1>
      <AddressBarWrapper>
        <AddressBar>
          <FrameParent>
            <LockWrapper>
              <LockIcon alt="" src="/lock.svg" />
            </LockWrapper>
            <Text1 placeholder="www.tokenize.com" type="text" />
          </FrameParent>
          <StarWrapper>
            <StarIcon alt="" src="/star.svg" />
          </StarWrapper>
        </AddressBar>
      </AddressBarWrapper>
      <AvatarWrapper>
        <Avatar>
          <M>M</M>
        </Avatar>
      </AvatarWrapper>
      <BrowserActionButtons>
        <BackIcon loading="lazy" alt="" src="/more.svg" />
      </BrowserActionButtons>
    </ChromeBrowserBarRoot>
  );
};

ChromeBrowserBar.propTypes = {
  className: PropTypes.string,
};

export default ChromeBrowserBar;
