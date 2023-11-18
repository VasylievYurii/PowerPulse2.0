// import { ExersiceFormlLink, ExersiceFormlLinkSub, ExersiceFormlLinkTitle, ExersiceList } from "./AddExersiceFormList.styled";

const ExersiceFormList = ({ name, bodypart, target, equipment, time }) => {
  const firstLetterToUppercase = (title) => {
    return title.replace(title[0], title[0].toUpperCase());
  };
  
  return (
    <ExersiceList>
      <ExersiceFormlLink>
        <ExersiceFormlLinkSub >Name</ExersiceFormlLinkSub>
        <ExersiceFormlLinkTitle >{firstLetterToUppercase(name)}</ExersiceFormlLinkTitle>
      </ExersiceFormlLink>
      <ExersiceFormlLink >
        <ExersiceFormlLinkSub >Target</ExersiceFormlLinkSub>
        <ExersiceFormlLinkTitle >{firstLetterToUppercase(target)}</ExersiceFormlLinkTitle>
      </ExersiceFormlLink>
      <ExersiceFormlLink >
        <ExersiceFormlLinkSub >Body Part</ExersiceFormlLinkSub>
        <ExersiceFormlLinkTitle >{firstLetterToUppercase(bodypart)}</ExersiceFormlLinkTitle>
      </ExersiceFormlLink>
      <ExersiceFormlLink >
        <ExersiceFormlLinkSub >Equipment</ExersiceFormlLinkSub>
        <ExersiceFormlLinkTitle>{firstLetterToUppercase(equipment)}</ExersiceFormlLinkTitle>
      </ExersiceFormlLink>
      <ExersiceFormlLink >
        <ExersiceFormlLinkSub >Time</ExersiceFormlLinkSub>
        <ExersiceFormlLinkTitle>{time} minutes</ExersiceFormlLinkTitle>
      </ExersiceFormlLink>
    </ExersiceList>
  );
};

export default ExersiceFormList;