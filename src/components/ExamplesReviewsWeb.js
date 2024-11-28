import ChromeBrowserBar from "./ChromeBrowserBar";
import styled from "styled-components";
import BuildingBlocksNavItem from "./BuildingBlocksNavItem";
import NavigationRail from "./NavigationRail";
import IconButton from "./IconButton";
import AssistiveChip from "./AssistiveChip";
import SegmentedButton from "./SegmentedButton";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const StateLayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-base);
`;
const Container = styled.div`
  align-self: stretch;
  height: 21px;
  border-radius: var(--br-81xl);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-xs);
  box-sizing: border-box;
`;
const Destinations1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  z-index: 1;
`;
const DestinationsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 196px 0px 0px;
  @media screen and (max-width: 675px) {
    padding-top: 127px;
    box-sizing: border-box;
  }
`;
const Destinations2 = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Headline = styled.div`
  height: 28px;
  flex: 1;
  position: relative;
  line-height: 28px;
  display: inline-block;
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
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-9xs);
`;
const Title = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 52px;
  font-weight: 600;
  font-family: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 750px) {
    font-size: 36px;
    line-height: 35px;
  }
  @media screen and (max-width: 450px) {
    font-size: 27px;
    line-height: 26px;
  }
`;
const Caption = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--m3-body-small-size);
  letter-spacing: 0.4px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  mix-blend-mode: normal;
`;
const TitleSubtitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AssistiveChips = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Header = styled.div`
  align-self: stretch;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    rgba(78, 78, 78, 0.25) 35.97%,
    rgba(0, 0, 0, 0.5)
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-5xl);
  gap: var(--gap-5xs);
`;
const ImageAlbumArt = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 1px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const Content = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 76px 0px 0px;
  position: relative;
  gap: var(--gap-5xs);
`;
const SegmentedButtonBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-xl);
`;
const HeroImage = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  gap: var(--gap-xs);
  flex-shrink: 0;
  font-size: 45px;
  color: var(--schemes-shadow);
`;
const List = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-9xs);
  max-width: 100%;
  flex-shrink: 0;
`;
const Content1 = styled.div`
  align-self: stretch;
  height: 637px;
  border-radius: var(--corner-extra-large) var(--corner-extra-large) 0px 0px;
  background-color: var(--schemes-surface-container-lowest);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-9xs);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    height: auto;
  }
`;
const PageContent = styled.div`
  height: 612px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) 0px 0px;
  box-sizing: border-box;
  max-width: calc(100% - 88px);
  @media screen and (max-width: 750px) {
    height: auto;
  }
`;
const Navigation1 = styled.section`
  width: 905px;
  height: 612px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-5xs);
  max-width: 100%;
  text-align: left;
  font-size: var(--m3-title-large-size);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
  @media screen and (max-width: 750px) {
    height: auto;
  }
`;
const ExamplesreviewsWebRoot = styled.div`
  width: 921px;
  border-radius: var(--br-lg);
  background-color: var(--schemes-surface);
  border: 8px solid var(--schemes-outline-variant);
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const ExamplesReviewsWeb = ({ className = "" }) => {
  return (
    <ExamplesreviewsWebRoot className={className}>
      <ChromeBrowserBar />
      <Navigation1>
        <Destinations2>
          <DestinationsList>
            <Destinations1>
              <Container>
                <StateLayer>
                  <Icon loading="lazy" alt="" src="/icon-3.svg" />
                </StateLayer>
              </Container>
              <BuildingBlocksNavItem
                badge="None"
                label
                selected
                state="Enabled"
                showNavItem1
                navItem1Height="35px"
                navItem1AlignSelf="stretch"
                navItem1Width="unset"
                showContainer={false}
                icon="/icon-2.svg"
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
            </Destinations1>
          </DestinationsList>
          <NavigationRail
            alignment="Top"
            fAB
            navigationRailWidth="72px"
            navigationRailMarginLeft="-72px"
            showDestinations={false}
          />
        </Destinations2>
        <PageContent>
          <Content1>
            <TopAppBar1>
              <IconButton
                state="Enabled"
                style="Standard"
                showMenu
                icon="/icon-9.svg"
                iconOverflow="unset"
                iconMargin="unset"
              />
              <Headline />
              <TrailingIcon>
                <IconButton
                  state="Enabled"
                  style="Standard"
                  showMenu
                  icon="/icon-10.svg"
                  iconOverflow="unset"
                  iconMargin="unset"
                />
                <IconButton
                  state="Enabled"
                  style="Standard"
                  showMenu
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
            </TopAppBar1>
            <HeroImage>
              <Content>
                <Header>
                  <TitleSubtitle>
                    <Title>María</Title>
                    <Caption>Mercedes</Caption>
                  </TitleSubtitle>
                  <AssistiveChips>
                    <AssistiveChip
                      configuration={`Label & icon`}
                      state="Enabled"
                      style="Elevated"
                      labelText="Agregar a mis conocidos"
                    />
                  </AssistiveChips>
                </Header>
                <ImageAlbumArt alt="" src="/-image-album-art@2x.png" />
              </Content>
              <SegmentedButtonBlock>
                <SegmentedButton density={0} segments={2} />
              </SegmentedButtonBlock>
            </HeroImage>
            <List>
              <ListItem headline="Family Photos" />
              <ListItem headline="Pet Photos" headlineMinWidth="84px" />
              <ListItem headline="List item" headlineMinWidth="331px" />
            </List>
          </Content1>
        </PageContent>
      </Navigation1>
    </ExamplesreviewsWebRoot>
  );
};

ExamplesReviewsWeb.propTypes = {
  className: PropTypes.string,
};

export default ExamplesReviewsWeb;
