import RadioBtn from '../RadioBtn/RadioBtn';
import {
  TextBlood,
  ContentBloodGender,
  ContentBlood,
  ContentGender,
  LifestyleBtn,
} from './RadioUseForm.styled';
const RadioUseForm = () => {
  return (
    <div>
      <TextBlood>Blood</TextBlood>
      <ContentBloodGender>
        <ContentBlood>
          <RadioBtn name="blood" value="1" text="1" />
          <RadioBtn name="blood" value="2" text="2" />
          <RadioBtn name="blood" value="3" text="3" />
          <RadioBtn name="blood" value="4" text="4" />
        </ContentBlood>
        <ContentGender>
          <RadioBtn name="sex" value="male" text="Male" />
          <RadioBtn name="sex" value="female" text="Female" />
        </ContentGender>
      </ContentBloodGender>
      <LifestyleBtn>
        <RadioBtn
          name="levelActivity"
          value="1"
          text="Sedentary lifestyle (little or no physical activity)"
        />
        <RadioBtn
          name="levelActivity"
          value="2"
          text="Light activity (light exercises/sports 1-3 days per week)"
        />
        <RadioBtn
          name="levelActivity"
          value="3"
          text="Moderately active (moderate exercises/sports 3-5 days per week)"
        />
        <RadioBtn
          name="levelActivity"
          value="4"
          text="Very active (intense exercises/sports 6-7 days per week)"
        />
        <RadioBtn
          name="levelActivity"
          value="5"
          text="Extremely active (very strenuous exercises/sports and physical work)"
        />
      </LifestyleBtn>
    </div>
  );
};

export default RadioUseForm;
