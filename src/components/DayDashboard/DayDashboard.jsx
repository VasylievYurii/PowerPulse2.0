import React from 'react';
import sprite from '../../assets/sprite.svg';
import {
  DashIconWrapper,
  DashIndicators,
  DashList,
  DashSection,
  DashTitle,
  WrapDashText
} from './DayDashboard.styled';
import { useSelector } from 'react-redux';
import { selectIndicators, selectMeals, selectWorkouts } from '../../redux/selectors';


const DayDashboard = () => {
  const { targetBmr, targetTime } = useSelector(selectIndicators);
  const meals = useSelector(selectMeals);
  const workouts = useSelector(selectWorkouts);

  console.log('meals DashBoard', meals);
  console.log('workouts DashBoard', workouts);
  const dayCalories = Math.round(targetBmr);
  const consumedCalories = Math.round(meals.reduce((total, meal) => total + meal.calories, 0));
  const burnCalories =  Math.round(workouts.reduce((total, workout) => total + workout.burnedCalories, 0)); 
  const totalWorkoutsTime = workouts.reduce((total, workout) => total + workout.time, 0); 
  console.log('totalWorkoutsTime', totalWorkoutsTime);

  // Кількість калорій, що залишилось нажерти від добової норми =
  // = калорії на добу - вже зіжрані калорії + спалені калорії під час воркауту 
  const restCalories = dayCalories - consumedCalories + burnCalories;
  
  // Скільки часу від денної норми залишилось потренуватись.
  const restWorkoutsTime = targetTime - totalWorkoutsTime;

  return (
    <DashSection>
      <DashList>
          <DashIndicators color='var(--color-main-one)'>
            <DashTitle color='rgba(239, 237, 232, 0.80)'>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-food`} />
              </DashIconWrapper>
              Daily calorie intake
          </DashTitle>
          {dayCalories}
          </DashIndicators>
          <DashIndicators color='var(--color-main-one)'>
            <DashTitle color='rgba(239, 237, 232, 0.80)'>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-dumbbell`} />
              </DashIconWrapper>
              Daily norm of sports
          </DashTitle>
          {targetTime} min
        </DashIndicators>
        <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-apple`} />
              </DashIconWrapper>
              Сalories consumed
          </DashTitle>
          {consumedCalories}
          </DashIndicators>
          <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-calories`} />
              </DashIconWrapper>
              Сalories burned
          </DashTitle>
          {burnCalories}
        </DashIndicators>
        <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-bubble`} />
              </DashIconWrapper>
              The rest of the calories
          </DashTitle>
          {restCalories}
          </DashIndicators>
          <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-run`} />
              </DashIconWrapper>
              The rest of sports
          </DashTitle>
          {restWorkoutsTime} min
          </DashIndicators>
      </DashList>
      <WrapDashText>
          <DashIconWrapper size='24px' fill='green' stroke='red'>
            <use href={`${sprite}#icon-exclamation`} />
          </DashIconWrapper>
            Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices.
        </WrapDashText>
    </DashSection>
  )
};

export default DayDashboard;
