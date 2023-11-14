import { ExersiceModalList, ExersiceModalLink, ExersiceModalLinkSub, ExersiceModalLinkTitle } from "./ExersiceModalWindowList.styled"

const ExersiceModalWindowList = ({name, bodypart, target, equipment, time}) => {
  const firstLetterToUppercase = (title) => {
    return title.replace(title[0], title[0].toUperCase());
}
    return (
        <ExersiceModalList>
<ExersiceModalLink>
        <ExersiceModalLinkSub >Name</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle >{firstLetterToUppercase(name)}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
      <ExersiceModalLink >
        <ExersiceModalLinkSub >Target</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle >{firstLetterToUppercase(target)}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
      <ExersiceModalLink >
        <ExersiceModalLinkSub >Body Part</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle >{firstLetterToUppercase(bodypart)}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
      <ExersiceModalLink >
        <ExersiceModalLinkSub >Equipment</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle>{firstLetterToUppercase(equipment)}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
      <ExersiceModalLink >
        <ExersiceModalLinkSub >Time</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle>{time} minutes</ExersiceModalLinkTitle>
      </ExersiceModalLink>
        </ExersiceModalList>



    );
};

export default ExersiceModalWindowList;