import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, subDays, addDays } from 'date-fns';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  CalendarWrapper,
  IconWrapper,
  IconCalendar,
  CustomHeaderWrapper,
  IconWrapperHeader,
  HeaderData,
} from './DiaryCalendar.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../assets/sprite.svg';

const DiaryCalendar = ({ onDateChange }) => {
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

        <IconWrapper onClick={() => setStartDate(subDays(startDate, 1))}>
          <use href={`${sprite}#icon-left`} />
        </IconWrapper>
        <IconWrapper onClick={() => setStartDate(addDays(startDate, 1))}>
          <use href={`${sprite}#icon-right`} />
        </IconWrapper>
      </CalendarWrapper>
    );
  });

  const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <CustomHeaderWrapper>
        <IconWrapperHeader onClick={decreaseMonth}>
          <use href={`${sprite}#icon-left`} />
        </IconWrapperHeader>
        <HeaderData>{format(date, 'MMMM yyyy')}</HeaderData>
        <IconWrapperHeader onClick={increaseMonth}>
          <use href={`${sprite}#icon-right`} />
        </IconWrapperHeader>
      </CustomHeaderWrapper>
    );
  };

  return (
    <>
      <DatePicker
        minDate={new Date()}
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

export default DiaryCalendar;
