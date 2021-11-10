import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Button from 'components/Button/Button';
import { getIsLoggedIn, getUserEmail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { Wrapper, P } from './styled';

export default function UserMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return isLoggedIn ? (
    <Wrapper>
      <NavLink
        to="/contacts"
        exact
        style={{ color: '#e99f17', fontSize: '18px', marginLeft: '100px' }}
      >
        My Contacts
      </NavLink>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <P>{email}</P>
        <Button
          style={{ marginLeft: '100px' }}
          type="button"
          text="Log out"
          onClick={() => {
            dispatch(logout());
          }}
        ></Button>
      </div>
    </Wrapper>
  ) : (
    <p>Welcome</p>
  );
}
