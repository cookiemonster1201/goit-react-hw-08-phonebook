import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Button from 'components/Button/Button';
import { login } from 'redux/auth/auth-operations';
import { StyledAuthForm, StyledInput } from './LoginForm-styled';
import { getIsAuthorizing } from 'redux/auth/auth-selectors';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuthorizing = useSelector(getIsAuthorizing);

  const handleStateChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit}>
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
        style={{ marginBottom: '20px' }}
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
            'Log in'
          )
        }
      />
      <NavLink
        style={{ fontSize: '20px', color: '#e99f17', marginTop: '20px' }}
        to="/register"
        exact
      >
        Register
      </NavLink>
    </StyledAuthForm>
  );
}
