import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { CalendarGlobalStyles, TitleWrapper } from './ProfileCalendar.styled';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ProfileCalendar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(startDate, 'dd.MM.yyyy')}
      </TitleWrapper>
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

export default ProfileCalendar;
