import ChromeBrowserBar from "../components/ChromeBrowserBar";
import ConversationList from "../components/ConversationList";
import IconButton from "../components/IconButton";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Headline = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 28px;
  font-weight: 400;
  font-family: inherit;
`;
const TrailingIcon = styled.div`
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const TopAppBar1 = styled.div`
  align-self: stretch;
  background-color: var(--schemes-surface-container-lowest);
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-9xs);
`;
const ImageIcon = styled.img`
  border: none;
  background-color: transparent;
  height: 176px;
  width: auto;
  outline: none;
  align-self: stretch;
  position: relative;
  border-radius: var(--br-5xs);
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const MiraAMara = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Tokenizecom = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 20px;
  color: var(--schemes-on-surface-variant);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TextContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MessageCard = styled.div`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--schemes-surface-container-high);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  gap: 6px;
`;
const ChatText = styled.div`
  position: relative;
  letter-spacing: 0.5px;
  line-height: 24px;
`;
const SendChatBubble = styled.div`
  border-radius: var(--br-xl) var(--br-xl) var(--br-5xs) var(--br-xl);
  background-color: var(--schemes-secondary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-mini) var(--padding-3xs)
    var(--padding-base);
  box-sizing: border-box;
  max-width: 380px;
  min-height: 44px;
  font-size: var(--m3-body-large-size);
  color: var(--schemes-surface-container-lowest);
`;
const Message = styled.div`
  align-self: stretch;
  background-color: var(--schemes-surface-container-lowest);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-lg) var(--padding-5xl) var(--padding-5xs) 281px;
  gap: var(--gap-9xs);
  font-size: var(--m3-title-small-size);
  @media screen and (max-width: 625px) {
    padding-left: 140px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ImageIcon1 = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  border-radius: 1000px;
  object-fit: cover;
`;
const SendChatBubble1 = styled.div`
  border-radius: var(--br-xl) var(--br-xl) var(--br-xl) var(--br-5xs);
  background-color: var(--schemes-surface-container-high);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-mini) var(--padding-3xs)
    var(--padding-base);
  box-sizing: border-box;
  max-width: 336px;
  min-height: 44px;
`;
const ReplyMessage = styled.div`
  align-self: stretch;
  background-color: var(--schemes-surface-container-lowest);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) 275px var(--padding-5xs) var(--padding-5xl);
  gap: var(--gap-5xs);
  font-size: var(--m3-body-large-size);
  color: var(--schemes-on-surface-variant);
  @media screen and (max-width: 625px) {
    flex-wrap: wrap;
    padding-right: 137px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ImageContent = styled.div`
  position: relative;
  font-size: var(--m3-body-large-size);
  letter-spacing: 0.5px;
  line-height: 24px;
  font-family: var(--m3-title-small);
  color: var(--schemes-on-secondary-container);
  text-align: left;
`;
const Bubble = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs) var(--padding-mini) var(--padding-3xs)
    var(--padding-base);
  background-color: var(--schemes-secondary-container);
  border-radius: 20.03px 20.03px 8.01px 20.03px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  min-height: 44px;
  &:hover {
    background-color: var(--color-thistle);
  }
`;
const PredictiveResponses = styled.div`
  align-self: stretch;
  background-color: var(--schemes-surface-container-lowest);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-base) var(--padding-5xl) 0px 227px;
  gap: var(--gap-5xs);
  @media screen and (max-width: 625px) {
    padding-left: 113px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const AddCircleIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const MoodIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const MessageInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  padding: var(--padding-xs) var(--padding-5xl);
  gap: var(--gap-base);
`;
const Conversation = styled.div`
  flex: 1;
  border-radius: var(--corner-extra-large);
  background-color: var(--schemes-surface-container-lowest);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 90px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    padding-bottom: 58px;
    box-sizing: border-box;
  }
`;
const Content = styled.div`
  height: 588px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  max-width: calc(100% - 337px);
  @media screen and (max-width: 625px) {
    height: auto;
    max-width: 100%;
  }
`;
const ConversationListParent = styled.div`
  height: 588px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-5xl);
  max-width: 100%;
  @media screen and (max-width: 625px) {
    height: auto;
  }
`;
const Content1 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-mini);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--m3-title-large-size);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
`;
const ExamplesmessagingWebRoot = styled.div`
  width: 100%;
  position: relative;
  border-radius: var(--br-lg);
  background-color: var(--schemes-surface);
  border: 8px solid var(--schemes-outline-variant);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  line-height: normal;
  letter-spacing: normal;
`;

const ExamplesMessagingWeb = () => {
  return (
    <ExamplesmessagingWebRoot>
      <ChromeBrowserBar />
      <Content1>
        <ConversationListParent>
          <ConversationList />
          <Content>
            <Conversation>
              <TopAppBar1>
                <IconButton
                  state="Enabled"
                  style="Standard"
                  showMenu
                  icon="/account-circle.svg"
                  iconOverflow="unset"
                  iconMargin="unset"
                />
                <Headline>José</Headline>
                <TrailingIcon>
                  <IconButton
                    state="Enabled"
                    style="Standard"
                    showMenu
                    icon="/icon1.svg"
                    iconOverflow="hidden"
                    iconMargin="unset"
                  />
                  <IconButton
                    state="Enabled"
                    style="Standard"
                    showMenu
                    icon="/icon-13.svg"
                    iconOverflow="unset"
                    iconMargin="unset"
                  />
                  <IconButton
                    state="Enabled"
                    style="Standard"
                    showMenu={false}
                    iconOverflow="unset"
                    iconMargin="0"
                  />
                </TrailingIcon>
              </TopAppBar1>
              <Message>
                <MessageCard>
                  <ImageIcon rows={9} cols={10} alt="" src="/image1@2x.png" />
                  <TextContent>
                    <MiraAMara>Mira a María</MiraAMara>
                    <Tokenizecom>tokenize.com</Tokenizecom>
                  </TextContent>
                </MessageCard>
                <SendChatBubble>
                  <ChatText>Puedes ver esta foto?</ChatText>
                </SendChatBubble>
              </Message>
              <ReplyMessage>
                <ImageIcon1 loading="lazy" alt="" src="/image-12@2x.png" />
                <SendChatBubble1>
                  <ChatText>No, me pide el token</ChatText>
                </SendChatBubble1>
              </ReplyMessage>
              <PredictiveResponses>
                <Bubble>
                  <ImageContent>Let’s do it</ImageContent>
                </Bubble>
                <Bubble>
                  <ImageContent>Great!</ImageContent>
                </Bubble>
                <Bubble>
                  <ImageContent>Great!</ImageContent>
                </Bubble>
              </PredictiveResponses>
              <MessageInput>
                <AddCircleIcon loading="lazy" alt="" src="/add-circle.svg" />
                <MoodIcon loading="lazy" alt="" src="/mood.svg" />
                <SearchBar
                  showAvatar={false}
                  state="Enabled"
                  show2ndTrailingIcon={false}
                  show1stTrailingIcon
                  placeholderText="Hinted search text"
                />
              </MessageInput>
            </Conversation>
          </Content>
        </ConversationListParent>
      </Content1>
    </ExamplesmessagingWebRoot>
  );
};

export default ExamplesMessagingWeb;
