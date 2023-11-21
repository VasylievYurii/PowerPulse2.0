import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  StartBtn,
  PauseBtn,
  TimerWrapper,
  TimerTitle,
  Clock,
  IconWrapper,
  BurnedCalories,
} from './CountdownTimer.styled';

const CountdownTimer = ({ key = 1, timer = 3, isPlayTimer, handleTime, dynamicBurnCal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    };
    isPlayTimer(isPlaying)
  }, [isPlaying]);

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const formattedMinutes = formatNumber(minutes);
    const formattedSeconds = formatNumber(seconds);

    return (
      <Clock>
        {formattedMinutes}:{formattedSeconds}
      </Clock>
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <CountdownCircleTimer
        key={key}
        size="124"
        isPlaying={isPlaying}
        duration={timer * 60}
        colors={['#E6533C']}
        strokeWidth={4}
        strokeDashoffset={true}
        trailColor="#262625"
        onUpdate={(remainingTime) => {
          handleTime(remainingTime);
        }}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {children}
      </CountdownCircleTimer>
      <IconWrapper onClick={togglePlayPause}>
        {isPlaying ? (
          <PauseBtn>
            <use href={`${sprite}#icon-pause`} />
          </PauseBtn>
        ) : (
          <StartBtn>
            <use href={`${sprite}#icon-play`} />
          </StartBtn>
        )}
      </IconWrapper>
      <BurnedCalories>
        Burned calories:&nbsp;<span>{dynamicBurnCal}</span>
      </BurnedCalories>
    </TimerWrapper>
  );
};

export default CountdownTimer;
