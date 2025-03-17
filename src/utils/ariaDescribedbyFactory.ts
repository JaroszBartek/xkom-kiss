export const ariaDescribedbyFactory = (
  id: string,
  hasDescription: boolean,
  hasError: boolean
): string | undefined => {
  let ariaDescribedby: string = '';
  if (!id) {
    return ariaDescribedby;
  }
  if (!hasDescription && !hasError) {
    return ariaDescribedby;
  }
  if (hasDescription) {
    ariaDescribedby = `${id}-description`;
  }
  if (hasError) {
    ariaDescribedby = `${ariaDescribedby || ''} ${id}-error`;
  }
  return ariaDescribedby;
};
