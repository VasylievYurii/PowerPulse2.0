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
    /* width: 215px; */
    /* height: 236px; */
    padding: 14px;
  background-color: var(--color-main-two);
     font-family: Roboto;
    border-radius: 8px;
  }

  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }

  .react-datepicker__header {
    position: relative;
    background-color: var(--color-main-two);
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:11px;
    padding-top: 14px;
    /* padding: 8px 8px; */
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    
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
    color: var(--color-text);
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  .react-datepicker__day-name {
    color: rgba(239, 237, 232, 0.50);
font-family: Roboto;
font-size: 14px;
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
    justify-content: space-between;
    color: white;
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }

  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }

  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }

  .react-datepicker__day--weekend {
    opacity: 50%;
  }

.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }

  .react-datepicker__triangle {
    visibility: hidden;
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
