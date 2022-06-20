export default function (errorCode){
  switch (errorCode){
  case 'auth/email-already-in-use':
    return 'Email already using.';
  case 'auth/invalid-email':
    return 'No valid e-mail.';
  default:
    break;
  }
}