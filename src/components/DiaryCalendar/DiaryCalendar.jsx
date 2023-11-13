import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  CalendarWrapper,
  IconWrapper,
  IconCalendar,
} from './DiaryCalendar.styled';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import sprite from '../../assets/sprite.svg';

const DiaryCalendar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <CalendarWrapper>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(startDate, 'dd/MM/yyyy')}
        </TitleWrapper>
        <IconCalendar onClick={onClick} ref={ref}>
          <use href={`${sprite}#icon-calendar`} />
        </IconCalendar>
        <IconWrapper>
          <use href={`${sprite}#icon-left`} />
        </IconWrapper>
        <IconWrapper>
          <use href={`${sprite}#icon-right`} />
        </IconWrapper>
      </CalendarWrapper>
    );
  });

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          onDateChange(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default DiaryCalendar;
