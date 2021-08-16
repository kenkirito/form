export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }else if (!/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.username)) {
    errors.username = 'Enter a valid name';
   }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t\-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,63}|\d{1,3})(\]?)$/.test(values.email)) {
    errors.email = 'Email address is invalid';
  } 



  if (!values.number) {
    errors.number = 'number is required';
  }else if (!/^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{9})$/.test(values.number)) {
    errors.number = 'Invalid';
  }
  return errors;
}
