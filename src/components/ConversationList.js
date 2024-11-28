import styled from "styled-components";
import ListItemListItem0Density from "./ListItemListItem0Density";
import PropTypes from "prop-types";

const Label = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  min-width: 93px;
`;
const SectionHeader = styled.div`
  align-self: stretch;
  border-radius: var(--br-81xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-base);
`;
const ListItems = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--m3-body-small-size);
`;
const ConversationListRoot = styled.div`
  width: 313px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--m3-title-small-size);
  color: var(--schemes-on-surface-variant);
  font-family: var(--m3-title-small);
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

const ConversationList = ({ className = "" }) => {
  return (
    <ConversationListRoot className={className}>
      <SectionHeader>
        <Label>Conversations</Label>
      </SectionHeader>
      <ListItems>
        <ListItemListItem0Density
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
          trailingSupportingText="1 min"
          showLeadingAvatar
          overline="Overline"
          showTrailingSupportingText
          supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
          headline="José"
          showDivider={false}
        />
        <ListItemListItem0Density
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
          trailingSupportingText="10 min"
          showLeadingAvatar
          overline="Overline"
          showTrailingSupportingText
          supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
          headline="Marcelo"
          showDivider={false}
          listItem01BackgroundColor="#fef7ff"
          listItem01BorderRadius="var(--corner-large) var(--corner-large) 0px 0px"
          trailingSupportingTextColor="#49454f"
        />
        <ListItemListItem0Density
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
          trailingSupportingText="20 min"
          showLeadingAvatar
          overline="Overline"
          showTrailingSupportingText
          supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
          headline="Leonardo"
          showDivider={false}
          listItem01BackgroundColor="#fef7ff"
          listItem01BorderRadius="var(--corner-large) var(--corner-large) 0px 0px"
          trailingSupportingTextColor="#49454f"
        />
        <ListItemListItem0Density
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
          trailingSupportingText="5 min"
          showLeadingAvatar
          overline="Overline"
          showTrailingSupportingText
          supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
          headline="Juana"
          showDivider={false}
          listItem01BackgroundColor="#fef7ff"
          listItem01BorderRadius="var(--corner-large) var(--corner-large) 0px 0px"
          trailingSupportingTextColor="#49454f"
        />
        <ListItemListItem0Density
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
          trailingSupportingText="13 min"
          showLeadingAvatar
          overline="Overline"
          showTrailingSupportingText
          supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
          headline="Pedro"
          showDivider={false}
          listItem01BackgroundColor="#fef7ff"
          listItem01BorderRadius="var(--corner-large) var(--corner-large) 0px 0px"
          trailingSupportingTextColor="#49454f"
        />
        <ListItemListItem0Density
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
          trailingSupportingText="57 min"
          showLeadingAvatar
          overline="Overline"
          showTrailingSupportingText
          supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
          headline="León"
          showDivider={false}
          listItem01BackgroundColor="#fef7ff"
          listItem01BorderRadius="var(--corner-large) var(--corner-large) 0px 0px"
          trailingSupportingTextColor="#49454f"
        />
        <ListItemListItem0Density
          condition="2 line"
          leading="Monogram"
          showOverline={false}
          showSupportingText
          trailing="None"
          trailingSupportingText="1 h"
          showLeadingAvatar
          overline="Overline"
          showTrailingSupportingText
          supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
          headline="Andrea"
          showDivider={false}
          listItem01BackgroundColor="#fef7ff"
          listItem01BorderRadius="var(--corner-large) var(--corner-large) 0px 0px"
          trailingSupportingTextColor="#49454f"
        />
      </ListItems>
      <ListItemListItem0Density
        condition="2 line"
        leading="Monogram"
        showOverline={false}
        showSupportingText
        trailing="None"
        trailingSupportingText="10 min"
        showLeadingAvatar
        overline="Overline"
        showTrailingSupportingText
        supportingText="Supporting line text lorem ipsum dolor sit amet, consectetur."
        headline="Pablo"
        showDivider={false}
        listItem01BackgroundColor="#fef7ff"
        listItem01BorderRadius="var(--corner-large) var(--corner-large) 0px 0px"
        trailingSupportingTextColor="#49454f"
      />
    </ConversationListRoot>
  );
};

ConversationList.propTypes = {
  className: PropTypes.string,
};

export default ConversationList;
