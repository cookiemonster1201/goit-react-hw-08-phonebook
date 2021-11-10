import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import Button from 'components/Button/Button';
import { useDeleteContactMutation } from 'redux/contactsApi/contacts-slice';

export default function ContactsListItem({ contact: { name, number, id } }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        text={
          isDeleting ? (
            <Loader
              type="Oval"
              color="#da5f01"
              height={13}
              width={13}
              style={{ margin: '0 auto' }}
            />
          ) : (
            'delete'
          )
        }
      />
    </>
  );
}

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
