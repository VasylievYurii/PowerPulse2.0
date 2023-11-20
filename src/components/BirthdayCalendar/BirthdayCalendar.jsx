import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, getMonth, getYear, subYears } from 'date-fns';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  CalendarWrapper,
  IconCalendar,
  CustomHeaderWrapper,
  IconWrapperHeader,
  HeaderData,
  CircleWrapper,
} from './BirthdayCalendar.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../assets/sprite.svg';
import range from 'lodash/range';

const BirthdayCalendar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(subYears(new Date(), 18));
  const years = range((new Date(), 18), getYear(new Date()) + 0, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <CalendarWrapper>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(startDate, 'dd.MM.yyyy')}
          <IconCalendar onClick={onClick} ref={ref}>
            <use href={`${sprite}#icon-calendar`} />
          </IconCalendar>
        </TitleWrapper>
      </CalendarWrapper>
    );
  });

  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    changeYear,
    changeMonth,
  }) => {
    return (
      <CustomHeaderWrapper>
        <CircleWrapper>
          {' '}
          <IconWrapperHeader onClick={decreaseMonth}>
            <use href={`${sprite}#icon-left`} />
          </IconWrapperHeader>
        </CircleWrapper>

        <HeaderData>
          <select
            className="custom-select-style"
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            className="custom-select-style"
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </HeaderData>
        <CircleWrapper>
          <IconWrapperHeader onClick={increaseMonth}>
            <use href={`${sprite}#icon-right`} />
          </IconWrapperHeader>
        </CircleWrapper>
      </CustomHeaderWrapper>
    );
  };

  return (
    <>
      <DatePicker
        // minDate={new Date()}
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

export default BirthdayCalendar;
