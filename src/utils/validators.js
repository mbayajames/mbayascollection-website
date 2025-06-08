export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password) {
  return password.length >= 8;
}

export function isValidPhone(phone) {
  return /^\+2547\d{8}$/.test(phone);
}
