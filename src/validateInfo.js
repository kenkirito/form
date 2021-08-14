export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }else if (!/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.username)) {
    errors.username = 'Enter a valid name';
   }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } if (!/^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/.test(values.password)) {
    errors.password = 'Invalid';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}
