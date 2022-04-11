import { EMAIL_REGEX } from '../app/constants';

export const isValidEmail = (email) => EMAIL_REGEX.test(email);

export const isValidMobileNumber = (mobileNum) => typeof mobileNum === 'string' && mobileNum.length === 10;

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};

export const displayEllipsis = (text, length) => {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
};
