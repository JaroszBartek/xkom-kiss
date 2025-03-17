export const validateInput = (target: HTMLInputElement): string | undefined => {
  const { type, value, required, minLength, maxLength } = target;

  if (required && value.trim() === '') {
    return 'Pole jest wymagane';
  }

  if (type === 'tel') {
    const numberOnlyRegex = /^\d+$/;
    if (!numberOnlyRegex.test(value)) {
      return 'Dopuszczalne są tylko cyfry';
    }
  }

  if (type === 'email' && !value?.includes('@')) {
    return 'Email musi zawierać @';
  }

  if (minLength && value?.trim()?.length < minLength) {
    return `Minimalna ilość znaków to ${minLength}`;
  }

  if (maxLength > 0 && value?.trim()?.length > maxLength) {
    return `Maxymalna ilość znaków to ${maxLength}`;
  }
  return undefined;
};
