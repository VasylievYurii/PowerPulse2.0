// // import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import CountdownTimer from './CountdownTimer';
// import {
//   PlayIcon,
//   TimerBtn,
//   TimerSub,
//   TimerText,
//   TimerWrapper,
// } from './Timer.styled';
// import symbolDefs from '../../assets/sprite.svg';
// import { useState } from 'react';

// const Timer = ({ dinamicBurnCal }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [newTimer, setNewTimer] = useState({ start: 4, active: 'start' });

//   const handlePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <TimerWrapper>
//       <CountdownTimer></CountdownTimer>
//       {/* <TimerBtn onClick={handlePlay}>
//         <PlayIcon>
//           <use
//             href={
//               isPlaying ? `${symbolDefs}#icon-pause` : `${symbolDefs}#icon-play`
//             }
//           ></use>
//         </PlayIcon>
//       </TimerBtn> */}
//       {/* <TimerText>
//         Burned calories:<TimerSub>{dinamicBurnCal}</TimerSub>
//       </TimerText> */}
//     </TimerWrapper>
//   );
// };

// export default Timer;
