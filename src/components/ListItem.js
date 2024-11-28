import styled from "styled-components";
import HorizontalMiddleInset from "./HorizontalMiddleInset";
import PropTypes from "prop-types";

const ImageIcon = styled.img`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: var(--br-base);
  object-fit: cover;
`;
const LeadingElement = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Headline1 = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 28px;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 109px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 22px;
  }
  min-width: ${(p) => p.headlineMinWidth};
`;
const ReviewStar = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const ReviewsStars = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const HeadlineAndReviews = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
  }
`;
const Category = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 20px;
  white-space: pre-wrap;
  display: inline-block;
  max-width: 100%;
`;
const Details = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
`;
const SupportingText = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.25px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const SupportingText1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  font-size: var(--m3-title-small-size);
  color: var(--schemes-on-surface-variant);
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  min-width: 401px;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    min-width: 100%;
  }
`;
const TrailingSupportingText = styled.div`
  position: relative;
  letter-spacing: 0.5px;
  line-height: 16px;
  font-weight: 500;
  display: none;
`;
const Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const TrailingElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-21xl);
  gap: var(--gap-3xs);
  text-align: right;
  font-size: var(--m3-label-small-size);
  color: var(--schemes-on-surface-variant);
`;
const StateLayer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-base);
  max-width: 100%;
`;
const ListItemRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 88px;
  max-width: 100%;
  text-align: left;
  font-size: var(--m3-title-large-size);
  color: var(--schemes-on-surface);
  font-family: var(--m3-title-small);
`;

const ListItem = ({ className = "", headline, headlineMinWidth }) => {
  return (
    <ListItemRoot className={className}>
      <StateLayer>
        <LeadingElement>
          <ImageIcon loading="lazy" alt="" src="/image11@2x.png" />
        </LeadingElement>
        <Content>
          <HeadlineAndReviews>
            <Headline1 headlineMinWidth={headlineMinWidth}>
              {headline}
            </Headline1>
            <ReviewsStars>
              <ReviewStar loading="lazy" alt="" src="/review-star-01.svg" />
              <ReviewStar loading="lazy" alt="" src="/review-star-01.svg" />
              <ReviewStar loading="lazy" alt="" src="/review-star-01.svg" />
              <ReviewStar loading="lazy" alt="" src="/review-star-01.svg" />
              <ReviewStar loading="lazy" alt="" src="/review-star-01.svg" />
            </ReviewsStars>
          </HeadlineAndReviews>
          <SupportingText1>
            <Details>
              <Category>{`Category • $$ • 1.2 miles away  `}</Category>
            </Details>
            <SupportingText>
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </SupportingText>
          </SupportingText1>
        </Content>
        <TrailingElement>
          <TrailingSupportingText>100+</TrailingSupportingText>
          <Icon loading="lazy" alt="" src="/icon-22.svg" />
        </TrailingElement>
      </StateLayer>
      <HorizontalMiddleInset />
    </ListItemRoot>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string,

  /** Style props */
  headlineMinWidth: PropTypes.string,
};

export default ListItem;
