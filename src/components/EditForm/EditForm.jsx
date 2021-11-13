import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Button from 'components/Button/Button';
import { Input } from 'components/ContactsForm/ContactsForm-styled';
import { useEditContactMutation } from 'redux/contactsApi/contacts-slice';
import { Ul, Li, Form } from './EditForm-styled';

export default function EditForm({ handleEdit, dismissEditing, name, number }) {
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  // eslint-disable-next-line
  const [editContact, { isLoading: isProcessingEditedContact }] =
    useEditContactMutation();

  const handleStateChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setNewName(value);
        break;

      case 'number':
        setNewNumber(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
    // eslint-disable-next-line
  }, []);

  const handleEsc = ({ code }) => {
    if (code !== 'Escape') {
      return;
    }
    dismissEditing();
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleEdit({ newName, newNumber });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleStateChange}
          value={newName}
          style={{ marginBottom: '10px' }}
          required
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleStateChange}
          value={newNumber}
          style={{ marginBottom: '10px' }}
          required
        />
      </div>
      <Ul>
        <Li>
          <Button
            type="submit"
            green
            text={
              isProcessingEditedContact ? (
                <Loader
                  type="Oval"
                  color="#da5f01"
                  height={14}
                  width={14}
                  style={{ margin: '0 auto' }}
                />
              ) : (
                'Save'
              )
            }
          />
        </Li>
        <Li>
          <Button type="button" text="Dismiss" onClick={dismissEditing} />
        </Li>
      </Ul>
    </Form>
  );
}

EditForm.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  dismissEditing: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
