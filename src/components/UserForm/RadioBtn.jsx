import { Field } from 'formik';
import './useForm.css';
const RadioBtn = ({ name, value, text }) => {
  return (
    <label className="radio-label">
      <Field className="radio-input" type="radio" name={name} value={value} />

      <span className="custom-radio" />
      <p className="radio-text">{text}</p>
    </label>
  );
};

export default RadioBtn;
