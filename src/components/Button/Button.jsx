import PropTypes from 'prop-types';

import { StyledButton } from './styled';
export default function Button({ text, onClick, type, ...otherProps }) {
  return (
    <StyledButton type={type} onClick={onClick} {...otherProps}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};
