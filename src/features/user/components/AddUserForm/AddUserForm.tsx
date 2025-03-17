import { Button, Form, FormField } from '../../../../components';
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

  const { formData, formErrors, handleInputChange, handleSubmit } = useForm<Omit<User, 'id'>>(
    initialState,
    addUser
  );

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormField
        id="add-user-form-email"
        label="E-mail"
        type="email"
        name="email"
        value={formData.email}
        error={formErrors.email}
        onChange={handleInputChange}
      />
      <FormField
        id="add-user-form-firstName"
        label="Imię"
        type="text"
        name="firstName"
        value={formData.firstName}
        error={formErrors.firstName}
        onChange={handleInputChange}
      />
      <FormField
        id="add-user-form-phoneNumber"
        label="Numer"
        type="tel"
        name="phoneNumber"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
        description="Numer 9 cyfrowy"
        value={formData.phoneNumber}
        error={formErrors.phoneNumber}
        onChange={handleInputChange}
      />
      <Button type="submit">Zapisz</Button>
    </Form>
  );
};
