import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { useState } from 'react';

import Button from 'components/Button/Button';
import EditForm from 'components/EditForm/EditForm';
import {
  useDeleteContactMutation,
  useEditContactMutation,
} from 'redux/contactsApi/contacts-slice';
import {
  showErrorNotification,
  showSuccessNotification,
} from 'utils/notifications';
import defaultAvatar from './avatar.png';
import { Avatar } from '../styled';

export default function ContactsListItem({ contact: { name, number, id } }) {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [editContact] = useEditContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
    } catch {
      showErrorNotification('Oops, something went wrong');
    }
  };

  const dismissEditing = () => {
    setIsEditing(false);
  };

  const handleEdit = async ({ newName, newNumber }) => {
    const fieldsToUpdate = {};
    if (name !== newName) {
      fieldsToUpdate.name = newName;
    }
    if (number !== newNumber) {
      fieldsToUpdate.number = newNumber;
    }

    if (fieldsToUpdate.number || fieldsToUpdate.name) {
      try {
        await editContact({ id, ...fieldsToUpdate });
        showSuccessNotification('Contact has been changed!');
      } catch {
        showErrorNotification('Oops, something went wrong');
      }
    }
    setIsEditing(false);
  };

  const openEditor = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Avatar src={defaultAvatar}></Avatar>
      {isEditing ? (
        <EditForm
          handleEdit={handleEdit}
          dismissEditing={dismissEditing}
          name={name}
          number={number}
        />
      ) : (
        <>
          <p>
            {name}: {number}
          </p>

          <ul
            style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}
          >
            <li>
              <Button
                type="button"
                green
                onClick={openEditor}
                disabled={isDeleting}
                style={{ marginRight: '10px' }}
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
                    'edit'
                  )
                }
              />
            </li>
            <li>
              <Button
                type="button"
                onClick={handleDelete}
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
            </li>
          </ul>
        </>
      )}
    </>
  );
}

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
