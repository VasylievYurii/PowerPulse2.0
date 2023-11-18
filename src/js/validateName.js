function validateName(value) {
  let error;
  if (value === 'admin' || value === 'god') {
    error = 'Nice try!';
  }
  return error;
}

export default validateName;
