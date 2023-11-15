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


const DayDashboard = () => {

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
          5454
            {/* <TextSpan>{colories}</TextSpan> */}
          </DashIndicators>
          <DashIndicators color='var(--color-main-one)'>
            <DashTitle color='rgba(239, 237, 232, 0.80)'>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-dumbbell`} />
              </DashIconWrapper>
              Daily norm of sports
          </DashTitle>
          5454
            {/* <TextSpan>{colories}</TextSpan> */}
        </DashIndicators>
        <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-apple`} />
              </DashIconWrapper>
              Сalories consumed
          </DashTitle>
          5454
            {/* <TextSpan>{colories}</TextSpan> */}
          </DashIndicators>
          <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-calories`} />
              </DashIconWrapper>
              Сalories burned
          </DashTitle>
          5454
            {/* <TextSpan>{colories}</TextSpan> */}
        </DashIndicators>
        <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-bubble`} />
              </DashIconWrapper>
              The rest of the calories
          </DashTitle>
          5454
            {/* <TextSpan>{colories}</TextSpan> */}
          </DashIndicators>
          <DashIndicators>
            <DashTitle>
              <DashIconWrapper fill='var(--color-main-two)' stroke='var(--color-main-two)'>
                <use href={`${sprite}#icon-run`} />
              </DashIconWrapper>
              The rest of sports
          </DashTitle>
          5454
            {/* <TextSpan>{colories}</TextSpan> */}
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
