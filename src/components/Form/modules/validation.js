import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const validation = (userData) => {
  const errors = {};
  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)/;

  if (!emailRegex.test(userData.email)) errors.email = 'Invalid email';
  if (!userData.email) errors.email = 'Please enter an email';
  if (userData.email.length > 35) errors.email = 'Email is too long';
  
  if (!passwordRegex.test(userData.password)) errors.password = 'Password must contain a number';
  if (!userData.password) errors.password = 'Please enter a password';
  if (userData.password.length < 6 || userData.password.length > 18) errors.password = 'Password must be between 6 and 18 characters';
 
  return errors
};

export default validation;
