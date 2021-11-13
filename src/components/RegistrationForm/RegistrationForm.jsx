import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Loader from 'react-loader-spinner';

import { NavLink } from 'react-router-dom';
import {
  StyledAuthForm,
  StyledInput,
} from 'components/LoginForm/LoginForm-styled';
import Button from 'components/Button/Button';
import { register } from 'redux/auth/auth-operations';
import { getIsAuthorizing } from 'redux/auth/auth-selectors';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthorizing = useSelector(getIsAuthorizing);
  const dispatch = useDispatch();

  const handleStateChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleStateChange}
        value={name}
        placeholder="Enter Name and Surname (e.g. 'John Smith')"
        required
      />
      <StyledInput
        type="text"
        name="email"
        pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
        title="Пожалуйста проверьте правильность ввода"
        onChange={handleStateChange}
        value={email}
        placeholder="Enter email address (e.g. 'Johnsmith@mail.com')"
        required
      />
      <StyledInput
        type="password"
        name="password"
        onChange={handleStateChange}
        value={password}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8"
        placeholder="Enter password"
        required
      />
      <Button
        type="submit"
        big
        style={{ marginBottom: '10px' }}
        text={
          isAuthorizing ? (
            <Loader
              type="Oval"
              color="#da5f01"
              height={14}
              width={14}
              style={{ margin: '0 auto' }}
            />
          ) : (
            'Sign up'
          )
        }
      />
      <NavLink
        style={{ fontSize: '20px', color: '#e99f17', marginTop: '20px' }}
        to="/login"
        exact
      >
        Log in
      </NavLink>
    </StyledAuthForm>
  );
}
