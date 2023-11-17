import { createGlobalStyle, styled } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px; 
   height: 236px;
    padding: 14px;
  background-color: var(--color-main-two) !important;
     font-family: Roboto;
    border-radius: 8px;
    font-size: 14px !important;
    border: none !important;
    z-index: 2 !important;
  }

  .react-datepicker__month-container {
    /* float: inherit; */
    box-sizing: border-box;
    width: 187px;
    margin: 0 !important;
    /* outline: 1px solid blue; */
  }

.react-datepicker__month {
  margin: 0 !important;
  text-align: center;
}

  .react-datepicker__header {
    position: relative;
    width: 187px;
    background-color: var(--color-main-two) !important;
  
  }

  .react-datepicker__day-names {
    display: flex;
    width: 187px;
    justify-content: space-between;
    align-items: center;
    /* gap:11px; */
    padding-top: 14px;
    /* padding: 8px 8px; */
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  
    background-color: var(--color-main-two) !important;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}

  .react-datepicker__current-month {
    font-family: Roboto;
    font-style: normal;
    text-align: center;
    color: var(--color-text) !important;
    font-size: 16px !important;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    margin:0px !important;
    margin-bottom: 14px !important;
  }

  .react-datepicker__day-name {
    color: rgba(239, 237, 232, 0.50)  !important;
font-family: Roboto;
font-size: 14px !important;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
  }

  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }

  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }

  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    color: var(--color-text) !important;
    width: 187px;
        /* outline: 1px solid red; */
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 11px; */
    /* flex-shrink: 0; */
    margin: 0;
    width: 32px;
    /* height: 32px; */
    border-radius: 50% !important;
    text-align: center;
    color: var(--color-text) !important;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.28px;
  }

  .react-datepicker__month {
    display: flex;
    width: 187px;
    /* gap: 11px; */
    flex-direction: column;
    justify-content: space-between;
    padding-top: 11px;
    margin: 0;
  }

  .react-datepicker__day--selected {
    background-color: black !important;
    color:#3e85f3;
    font-size: 14px;
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
   background-color: black !important;
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: black !important;
    color:#3e85f3;
  }

  /* .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  } */

  .react-datepicker__day--weekend {
    opacity: 100%;
  }

//Дати інших місяців
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 50%;
  }

  /* .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  } */

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0 !important;
  }

`;

export const TitleWrapper = styled.button`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  background-color: transparent;
  border: none;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-text);
`;

export const IconCalendar = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--color-main-one);
`;
