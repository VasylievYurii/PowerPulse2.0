// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerWrapper,
} from './Timer.styled';
import symbolDefs from '../../assets/sprite.svg';
import { useState } from 'react';


 const Timer = ({  dinamicBurnCal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <TimerWrapper>
      
      <TimerBtn onClick={handlePlay}>
        <PlayIcon>
          <use
            href={
              isPlaying
                ? `${symbolDefs}#icon-pause`
                : `${symbolDefs}#icon-play`
            }
          ></use>
        </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:<TimerSub>{dinamicBurnCal}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;