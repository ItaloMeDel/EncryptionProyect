import ChromeBrowserBar from "../components/ChromeBrowserBar";
import NavigationRail from "../components/NavigationRail";
import TopAppBar from "../components/TopAppBar";
import styled from "styled-components";

const ImageIcon = styled.img`
  height: 356px;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 370px;
`;
const ImageIcon1 = styled.img`
  height: 176px;
  width: 117px;
  position: relative;
  border-radius: var(--br-xs);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ImageIcon2 = styled.img`
  height: 176px;
  width: 179px;
  position: relative;
  border-radius: var(--br-xs);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const DoubleImageColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const ImageIcon3 = styled.img`
  height: 176px;
  width: 185px;
  position: relative;
  border-radius: var(--br-xs);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ImageIcon4 = styled.img`
  height: 176px;
  width: 111px;
  position: relative;
  border-radius: var(--br-xs);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const ImageIcon5 = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  min-width: 250px;
`;
const ImageGroup1 = styled.div`
  height: 356px;
  width: 250px;
  margin: 0 !important;
  position: absolute;
  bottom: -227px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const ImageIcon6 = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  min-width: 370px;
`;
const ImageIcon7 = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  min-width: 128px;
`;
const ImageGroup2 = styled.div`
  height: 356px;
  width: 510px;
  margin: 0 !important;
  position: absolute;
  right: 24px;
  bottom: -227px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  max-width: 100%;
`;
const ImageIcon8 = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ImageGroup3 = styled.div`
  height: 356px;
  width: 140.7px;
  margin: 0 !important;
  position: absolute;
  bottom: -592px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const ImageIcon9 = styled.img`
  align-self: stretch;
  height: 176px;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ImageGroup4 = styled.div`
  flex: 1;
  margin: 0 !important;
  position: absolute;
  bottom: -592px;
  left: 173.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const ImageIcon10 = styled.img`
  width: 250px;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-height: 100%;
  overflow: hidden;
  object-fit: cover;
`;
const ImageGroup5 = styled.div`
  height: 356px;
  flex: 1;
  margin: 0 !important;
  position: absolute;
  right: 24px;
  bottom: -592px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const HeroImageGrid = styled.div`
  align-self: stretch;
  height: 515px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
  box-sizing: border-box;
  position: relative;
  gap: 9px 3px;
  max-width: 100%;
`;
const Content = styled.div`
  width: 817px;
  border-radius: var(--br-9xl);
  background-color: var(--schemes-surface-container-lowest);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  flex-shrink: 0;
  max-width: 100%;
`;
const ContentWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
  margin-top: -683px;
`;
const NavigationRailParent = styled.section`
  width: 905px;
  height: 612px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const ExamplesgalleryWebRoot = styled.div`
  width: 100%;
  height: 696px;
  position: relative;
  border-radius: var(--br-lg);
  background-color: var(--schemes-surface);
  border: 8px solid var(--schemes-outline-variant);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const ExamplesGalleryWeb = () => {
  return (
    <ExamplesgalleryWebRoot>
      <ChromeBrowserBar />
      <NavigationRailParent>
        <NavigationRail alignment="Top" fAB showDestinations />
        <ContentWrapper>
          <Content>
            <TopAppBar
              configuration="Large"
              elevation="flat"
              show3rdTrailingIcon
              show1stTrailingIcon={false}
              show2ndTrailingIcon={false}
              headline="Mis carpetas"
            />
            <HeroImageGrid>
              <ImageIcon loading="lazy" alt="" src="/image@2x.png" />
              <ImageGroup>
                <DoubleImageColumn>
                  <ImageIcon1 loading="lazy" alt="" src="/image-1@2x.png" />
                  <ImageIcon2 loading="lazy" alt="" src="/image-2@2x.png" />
                </DoubleImageColumn>
                <DoubleImageColumn>
                  <ImageIcon3 loading="lazy" alt="" src="/image-3@2x.png" />
                  <ImageIcon4 loading="lazy" alt="" src="/image-4@2x.png" />
                </DoubleImageColumn>
              </ImageGroup>
              <ImageGroup1>
                <ImageIcon5 loading="lazy" alt="" src="/image-5@2x.png" />
                <ImageIcon5 alt="" src="/image-5@2x.png" />
              </ImageGroup1>
              <ImageGroup2>
                <ImageIcon6 loading="lazy" alt="" src="/image-7@2x.png" />
                <ImageIcon7 alt="" src="/image-7@2x.png" />
              </ImageGroup2>
              <ImageGroup3>
                <ImageIcon8 alt="" src="/image-9@2x.png" />
                <ImageIcon8 alt="" src="/image-9@2x.png" />
              </ImageGroup3>
              <ImageGroup4>
                <ImageIcon9 alt="" src="/image-11@2x.png" />
                <ImageIcon9 alt="" src="/image-11@2x.png" />
              </ImageGroup4>
              <ImageGroup5>
                <ImageIcon9 alt="" src="/image-13@2x.png" />
                <ImageIcon10 alt="" src="/image-14@2x.png" />
              </ImageGroup5>
            </HeroImageGrid>
          </Content>
        </ContentWrapper>
      </NavigationRailParent>
    </ExamplesgalleryWebRoot>
  );
};

export default ExamplesGalleryWeb;
