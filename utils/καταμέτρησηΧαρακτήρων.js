export const μέτρησηΧαρακτήρων = (κείμενο) => {
  if (typeof κείμενο !== 'string') {
    throw new TypeError('Το όρισμα πρέπει να είναι συμβολοσειρά.');
  }
  return κείμενο.length;
}
