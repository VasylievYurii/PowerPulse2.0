import sprite from '../../assets/sprite.svg';
import {
  DashIconWrapper,
  DashIndicators,
  DashList,
  DashSection,
  DashTitle,
  WrapDashText,
  DashIconExclamationWrapper,
  IconWrapper,
  Message,
} from './DayDashboard.styled';
import { useSelector } from 'react-redux';
import {
  selectIndicIsLoading,
  selectIndicators,
  selectMeals,
  selectMealsIsLoading,
  selectWorkouts,
  selectWorkoutsIsLoading,
} from '../../redux/selectors';
import Loader from '../Loader/Loader';
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';

const DayDashboard = () => {
  const indicIsLoad = useSelector(selectIndicIsLoading);
  const mealsIsLoad = useSelector(selectMealsIsLoading);
  const workoutsIsLoad = useSelector(selectWorkoutsIsLoading);
  const { targetBmr, targetTime } = useSelector(selectIndicators);
  const meals = useSelector(selectMeals);
  const workouts = useSelector(selectWorkouts);
  const dayCalories = Math.round(targetBmr);
  const consumedCalories = Math.round(
    meals.reduce((total, meal) => total + meal.calories, 0),
  );
  const burnCalories = Math.round(
    workouts.reduce((total, workout) => total + workout.burnedCalories, 0),
  );
  const totalWorkoutsTime = workouts.reduce(
    (total, workout) => total + workout.time,
    0,
  );

  // Кількість калорій, що залишилось нажерти від добової норми =
  // = калорії на добу - вже зіжрані калорії + спалені калорії під час воркауту
  const restCalories = dayCalories - consumedCalories + burnCalories;

  // Скільки часу від денної норми залишилось потренуватись.
  const restWorkoutsTime = targetTime - totalWorkoutsTime;

  let borderColorRestCalories = 'rgba(239, 237, 232, 0.20)';
  let borderColorRestWorkoutsTime = 'rgba(239, 237, 232, 0.20)';

  if (restCalories < 0) {
    borderColorRestCalories = 'var(--color-wrong-two)';
    borderColorRestWorkoutsTime = 'var(--color-approved-one)';
  }

  return (
    <DashSection>
      <DashList>
        <DashIndicators color="var(--color-main-one)">
          <DashTitle color="rgba(239, 237, 232, 0.80)">
            <DashIconWrapper
              fill="var(--color-main-two)"
              stroke="var(--color-main-two)"
            >
              <use href={`${sprite}#icon-food`} />
            </DashIconWrapper>
            Daily calorie intake
          </DashTitle>
          {indicIsLoad ? <Loader color='var(--color-text)'/> :
            (dayCalories !== 0 ? dayCalories : <Message>Please enter your details in the profile</Message>)}
        </DashIndicators>
        <DashIndicators color="var(--color-main-one)">
          <DashTitle color="rgba(239, 237, 232, 0.80)">
            <DashIconWrapper
              fill="var(--color-main-two)"
              stroke="var(--color-main-two)"
            >
              <use href={`${sprite}#icon-dumbbell`} />
            </DashIconWrapper>
            Daily norm of sports
          </DashTitle>
          {targetTime} min
        </DashIndicators>
        <DashIndicators>
          <DashTitle>
            <DashIconWrapper
              fill="var(--color-main-two)"
              stroke="var(--color-main-two)"
            >
              <use href={`${sprite}#icon-apple`} />
            </DashIconWrapper>
            Calories consumed
          </DashTitle>
          {mealsIsLoad ? <Loader/> : consumedCalories}
        </DashIndicators>
        <DashIndicators>
          <DashTitle>
            <DashIconWrapper
              fill="var(--color-main-two)"
              stroke="var(--color-main-two)"
            >
              <use href={`${sprite}#icon-calories`} />
            </DashIconWrapper>
            Calories burned
          </DashTitle>
          {workoutsIsLoad ? <Loader/> : burnCalories}
        </DashIndicators>
        <DashIndicators $border={borderColorRestCalories}>
          <DashTitle>
            <DashIconWrapper
              fill="var(--color-main-two)"
              stroke="var(--color-main-two)"
            >
              <use href={`${sprite}#icon-bubble`} />
            </DashIconWrapper>
            The rest of the calories
          </DashTitle>
          {(mealsIsLoad || workoutsIsLoad) ? <Loader/> : restCalories}
        </DashIndicators>
        <DashIndicators $border={borderColorRestWorkoutsTime}>
          <DashTitle>
            <DashIconWrapper
              fill="var(--color-main-two)"
              stroke="var(--color-main-two)"
            >
              <use href={`${sprite}#icon-run`} />
            </DashIconWrapper>
            The rest of sports
          </DashTitle>
          {workoutsIsLoad ? <Loader/> : (restCalories < 0 ? `+ ${restWorkoutsTime}` : restWorkoutsTime)} min
        </DashIndicators>
      </DashList>
      <WrapDashText>
        <IconWrapper>
          <DashIconExclamationWrapper>
            <use href={`${sprite}#icon-exclamation`} />
          </DashIconExclamationWrapper>
        </IconWrapper>
        Record all your meals in a calorie diary every day. This will help me be
        aware of my nutrition and make me responsible for my choices.
      </WrapDashText>
    </DashSection>
  );
};

export default DayDashboard;
