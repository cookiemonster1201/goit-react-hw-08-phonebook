import PropTypes from 'prop-types';
import { H1 } from './styled';

export default function Title({ text }) {
  return <H1>{text}</H1>;
}

ContactsListItem.propTypes = {
  text: PropTypes.string.isRequired,
};
