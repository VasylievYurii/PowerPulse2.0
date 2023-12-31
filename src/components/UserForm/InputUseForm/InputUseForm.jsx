import {
  ContantUseForm,
  TextInfo,
  LoginEmail,
  LoginEmailInput,
  TabletInput,
  HeighWeight,
  WhInput,
} from './InputUseForm.styled';
import BirthdayCalendar from '../../BirthdayCalendar/BirthdayCalendar';
import { ErrorMess } from '../UserForm.styled';

const InputUseForm = ({ onDateChange, errors, touched }) => {
  return (
    <ContantUseForm>
      <TextInfo>Basic info</TextInfo>
      <LoginEmail>
        <label>
          <LoginEmailInput type="text" name="name" />
        </label>
        <label>
          <LoginEmailInput type="email" name="email" />
          {errors.email && touched.email && (
            <ErrorMess>{errors.email}</ErrorMess>
          )}
        </label>
      </LoginEmail>

      <TabletInput>
        <HeighWeight>
          <div>
            <TextInfo>Height</TextInfo>
            <label>
              <WhInput name="height" />
              {errors.height && touched.height && (
                <ErrorMess>{errors.height}</ErrorMess>
              )}
            </label>
          </div>

          <div>
            <TextInfo>Current Weight</TextInfo>
            <label>
              <WhInput type="text" name="currentWeight" />
              {errors.currentWeight && touched.currentWeight && (
                <ErrorMess>{errors.currentWeight}</ErrorMess>
              )}
            </label>
          </div>
        </HeighWeight>
        <HeighWeight>
          <label>
            <TextInfo>Desired Weight</TextInfo>
            <WhInput type="text" name="desiredWeight" />
            {errors.desiredWeight && touched.desiredWeight && (
              <ErrorMess>{errors.desiredWeight}</ErrorMess>
            )}
          </label>
          <label>
            <TextInfo>Date of birth</TextInfo>
            <BirthdayCalendar name="birthday" onDateChange={onDateChange} />
          </label>
        </HeighWeight>
      </TabletInput>
    </ContantUseForm>
  );
};

export default InputUseForm;
