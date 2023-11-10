import { Field } from 'formik';
import '../useForm.css';
import styled from 'styled-components';

const InputUseForm = () => {
  return (
    <div className="contant-useForm">
      <p className="text-info">Basic info</p>
      <div className="login-email">
        <label>
          <Input type="text" name="login" className="login-email-input" />
        </label>
        <label>
          <Input type="email" name="email" className="login-email-input" />
        </label>
      </div>

      <div className="tablet-input">
        <div className="heigh-weight">
          <div>
            <p className="text-info">Height</p>
            <label>
              <Input name="height" className="wh-input" />
            </label>
          </div>

          <div>
            <p className="text-info">Current Weight</p>
            <label>
              <Input type="text" name="currentWeight" className="wh-input" />
            </label>
          </div>
        </div>
        <div className="heigh-weight">
          <label>
            <p className="text-info">Desired Weight</p>
            <Input type="text" name="desiredWeight" className="wh-input" />
          </label>
          <label>
            <p className="calendar">Calendar</p>

            <Input
              type="text"
              name="birthday"
              className="wh-input datepicker"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const Input = styled(Field)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;

export default InputUseForm;
