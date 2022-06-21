export default function (errorCode){
  switch (errorCode){
  case 'auth/email-already-in-use':
    return 'Email already using.';
  case 'auth/invalid-email':
    return 'No valid e-mail.';
  case 'auth/user-not-found':
    return 'User not found.';
  case 'auth/wrong-password':
    return 'Wrong password.';
  default:
    break;
  }
}