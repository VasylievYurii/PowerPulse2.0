import { ExersiceFormItem, ExersiceFormSub, ExersiceFormTitle, ExersiceList } from "./AddExersiceFormList.styled";

const ExersiceFormList = ({ name, bodypart, target, equipment, time }) => {
 
  return (
    <ExersiceList>
      <ExersiceFormItem>
        <ExersiceFormSub >Name</ExersiceFormSub>
        <ExersiceFormTitle >{name}</ExersiceFormTitle>
      </ExersiceFormItem>
      <ExersiceFormItem >
        <ExersiceFormSub >Target</ExersiceFormSub>
        <ExersiceFormTitle >{target}</ExersiceFormTitle>
      </ExersiceFormItem>
      <ExersiceFormItem >
        <ExersiceFormSub >Body Part</ExersiceFormSub>
        <ExersiceFormTitle >{bodypart}</ExersiceFormTitle>
      </ExersiceFormItem>
      <ExersiceFormItem >
        <ExersiceFormSub >Equipment</ExersiceFormSub>
        <ExersiceFormTitle>{equipment}</ExersiceFormTitle>
      </ExersiceFormItem>
      {/* <ExersiceFormItem >
        <ExersiceFormSub >Time</ExersiceFormSub>
        <ExersiceFormTitle>{time} minutes</ExersiceFormTitle>
      </ExersiceFormItem> */}
    </ExersiceList>
  );
};


export default ExersiceFormList;