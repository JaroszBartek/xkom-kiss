import { Button, Form, FormField, FormFieldError } from '../../../../components';
import { useForm } from '../../../../hooks/useForm';
import { User } from '../../User';
import { useUsersContext } from '../../store';

const initialState: Omit<User, 'id'> = {
  email: '',
  firstName: '',
  phoneNumber: '',
};

export const AddUserForm = () => {
  const { dispatch } = useUsersContext();

  const addUser = (formData: Omit<User, 'id'>) => {
    dispatch({ type: 'ADD_USER', payload: { id: crypto.randomUUID(), ...formData } });
  };

  const { formData, submitError, fieldsError, handleInputChange, handleSubmit } = useForm<
    Omit<User, 'id'>
  >(initialState, addUser);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormField
        id="add-user-form-email"
        label="E-mail"
        type="email"
        name="email"
        value={formData.email}
        error={fieldsError.email}
        onChange={handleInputChange}
        required
      />
      <FormField
        id="add-user-form-firstName"
        label="Imię"
        type="text"
        name="firstName"
        value={formData.firstName}
        error={fieldsError.firstName}
        onChange={handleInputChange}
        required
        minLength={2}
      />
      <FormField
        id="add-user-form-phoneNumber"
        label="Numer"
        type="tel"
        name="phoneNumber"
        description="Numer 9 cyfrowy"
        value={formData.phoneNumber}
        error={fieldsError.phoneNumber}
        onChange={handleInputChange}
        required
        minLength={9}
        maxLength={9}
      />
      <Button type="submit">Zapisz</Button>

      {submitError && <FormFieldError>{submitError}</FormFieldError>}
    </Form>
  );
};
