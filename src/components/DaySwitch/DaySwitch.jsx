import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, subDays, addDays, parseISO } from 'date-fns';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  CalendarWrapper,
  IconWrapper,
  IconCalendar,
  CustomHeaderWrapper,
  IconWrapperHeader,
  HeaderData,
  CircleWrapper,
} from './DaySwitch.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../assets/sprite.svg';

const DaySwitch = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <CalendarWrapper>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(startDate, 'dd/MM/yyyy')}
          <IconCalendar onClick={onClick} ref={ref}>
            <use href={`${sprite}#icon-calendar`} />
          </IconCalendar>
        </TitleWrapper>

        <IconWrapper onClick={() => handleDateChange(subDays(startDate, 1))}>
          <use href={`${sprite}#icon-left`} />
        </IconWrapper>
        <IconWrapper onClick={() => handleDateChange(addDays(startDate, 1))}>
          <use href={`${sprite}#icon-right`} />
        </IconWrapper>
      </CalendarWrapper>
    );
  });

  const handleDateChange = (newDate) => {
    setStartDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <CustomHeaderWrapper>
        <CircleWrapper onClick={decreaseMonth}>
          <IconWrapperHeader>
            <use href={`${sprite}#icon-left`} />
          </IconWrapperHeader>
        </CircleWrapper>
        <HeaderData>{format(date, 'MMMM yyyy')}</HeaderData>
        <CircleWrapper onClick={increaseMonth}>
          <IconWrapperHeader>
            <use href={`${sprite}#icon-right`} />
          </IconWrapperHeader>
        </CircleWrapper>
      </CustomHeaderWrapper>
    );
  };

  return (
    <>
      <DatePicker
        // minDate={userData.createdAt}
        maxDate={new Date()}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          onDateChange(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        renderCustomHeader={(props) => <CustomHeader {...props} />}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default DaySwitch;
