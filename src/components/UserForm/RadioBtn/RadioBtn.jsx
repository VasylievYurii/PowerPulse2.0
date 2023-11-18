import {
  RadioLabel,
  RadioText,
  RadioInput,
  CustomRadio,
} from './RadioBtn.styled';

const RadioBtn = ({ name, value, text }) => {
  return (
    <RadioLabel>
      <RadioInput type="radio" name={name} value={value} />

      <CustomRadio />
      <RadioText>{text}</RadioText>
    </RadioLabel>
  );
};

export default RadioBtn;
