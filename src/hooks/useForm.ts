import { useCallback, useMemo, useState } from 'react';
import { resetFormData, validateInput } from '../utils';

export const useForm = <T extends Record<string, any>>(
  initialState: T = {} as T,
  onSubmit: (formData: T) => void
) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [fieldsError, setFieldsError] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldError = validateInput(e.target);
    if (fieldError) {
      setFieldsError(prevState => ({
        ...prevState,
        [e.target.name]: fieldError,
      }));
    } else {
      setFieldsError(prevState => {
        const { [e.target.name]: _, ...newState } = prevState;
        return newState;
      });
    }
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }, []);

  const resetForm = useCallback(() => setFormData(resetFormData<T>(initialState)), [initialState]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (Object.keys(fieldsError).length > 0) {
        return setSubmitError('Sprawdź poprawność wszystkich inputów');
      }

      if (Object.values(formData).some(x => x === '')) {
        return setSubmitError('Wszystkie pola są wymagane');
      }

      onSubmit(formData);
      resetForm();
    },
    [formData, fieldsError, onSubmit, resetForm]
  );

  const formControls = useMemo(
    () => ({
      formData,
      handleInputChange,
      handleSubmit,
      fieldsError,
      submitError,
    }),
    [formData, fieldsError, submitError, handleInputChange, handleSubmit, resetForm]
  );

  return formControls;
};
