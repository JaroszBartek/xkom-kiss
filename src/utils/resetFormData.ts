export const resetFormData = <T extends Record<string, any>>(formData: T): T =>
  Object.keys(formData).reduce(
    (acc, key) => ({
      ...acc,
      [key]: '',
    }),
    {} as T
  );
