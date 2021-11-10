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
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
