import { User } from '../../User';

export type UserDataProps = {
  user: User;
};

export const UserData = ({ user }: UserDataProps) => (
  <div>
    <div>E-mail: {user.email}</div>
    <div>Imię: {user.firstName}</div>
    <div>Numer: {user.phoneNumber}</div>
  </div>
);
