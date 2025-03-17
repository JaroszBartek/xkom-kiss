import { useCallback, useState } from 'react';

const isInputValid = (type: string, value: string) => {
  switch (type) {
    case 'email':
      return value?.includes('@');
    case 'text':
      return value?.length > 1;
    case 'tel':
      return value?.length === 9;
    default:
      return true;
  }
};

export const useForm = <T extends Record<string, any>>(
  initialState: T = {} as T,
  onSubmit: (formData: T) => void
) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isInputValid(e.target.type, e.target.value)) {
      setFormErrors(prevState => ({
        ...prevState,
        [e.target.name]: `${e.target.name} field error!`,
      }));
    } else {
      setFormErrors(prevState => {
        const { [e.target.name]: _, ...newState } = prevState;
        return newState;
      });
    }
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }, []);

  const resetForm = useCallback(
    () =>
      setFormData(
        Object.keys(initialState).reduce(
          (acc, key) => ({
            ...acc,
            [key]: '',
          }),
          {} as T
        )
      ),
    [initialState]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasErrors = Object.keys(formErrors).length > 0;
    if (hasErrors) {
      return;
    }

    onSubmit(formData);
    resetForm();
  };

  return { formData, handleInputChange, handleSubmit, formErrors };
};
