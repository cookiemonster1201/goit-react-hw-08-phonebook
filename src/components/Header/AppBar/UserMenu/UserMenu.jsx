import Loader from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button/Button';
import {
  getIsAuthorizing,
  getIsLoggedIn,
  getUserEmail,
} from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { Wrapper, P } from './styled';

export default function UserMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const isAuthorizing = useSelector(getIsAuthorizing);

  return (
    isLoggedIn && (
      <Wrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <P>{email}</P>
          <Button
            style={{ marginLeft: '100px' }}
            type="button"
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
                'Log out'
              )
            }
            onClick={() => {
              dispatch(logout());
            }}
          ></Button>
        </div>
      </Wrapper>
    )
  );
}
