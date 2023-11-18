import {
  ContantUseForm,
  TextInfo,
  LoginEmail,
  LoginEmailInput,
  TabletInput,
  HeighWeight,
  WhInput,
} from './InputUseForm.styled';

const InputUseForm = () => {
  return (
    <ContantUseForm>
      <TextInfo>Basic info</TextInfo>
      <LoginEmail>
        <label>
          <LoginEmailInput type="text" name="name" />
        </label>
        <label>
          <LoginEmailInput type="email" name="email" />
        </label>
      </LoginEmail>

      <TabletInput>
        <HeighWeight>
          <div>
            <TextInfo>Height</TextInfo>
            <label>
              <WhInput name="height" />
            </label>
          </div>

          <div>
            <TextInfo>Current Weight</TextInfo>
            <label>
              <WhInput type="text" name="currentWeight" />
            </label>
          </div>
        </HeighWeight>
        <HeighWeight>
          <label>
            <TextInfo>Desired Weight</TextInfo>
            <WhInput type="text" name="desiredWeight" />
          </label>
          <label>
            <TextInfo>Date of birth</TextInfo>

            <WhInput type="text" name="birthday" />
          </label>
        </HeighWeight>
      </TabletInput>
    </ContantUseForm>
  );
};

export default InputUseForm;
