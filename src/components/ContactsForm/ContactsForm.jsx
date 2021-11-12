import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetAllContactsQuery,
  useAddContactMutation,
} from 'redux/contactsApi/contacts-slice';
import doesContactExists from 'utils/does-contact-exists';
import Button from 'components/Button/Button';
import { Form, Input } from './styled';
import {
  showErrorNotification,
  showSuccessNotification,
} from 'utils/notifications';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetAllContactsQuery();
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  const handleStateChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const resetFields = () => {
    setNumber('');
    setName('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (doesContactExists(contacts, name, number)) {
      return;
    }
    try {
      await addContact({ name, number });
      showSuccessNotification('Contact added!');
    } catch {
      showErrorNotification('Oops, something went wrong');
    }
    resetFields();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleStateChange}
        value={name}
        style={{ marginRight: '40px' }}
        placeholder="Enter Name and Surname (e.g. 'John Smith')"
        required
      />
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        onChange={handleStateChange}
        value={number}
        placeholder="Enter Phone Number (e.g. '+380 50 555 55 55')"
        required
      />
      <Button
        type="submit"
        big
        text={
          isAdding ? (
            <Loader
              type="Oval"
              color="#da5f01"
              height={14}
              width={14}
              style={{ margin: '0 auto' }}
            />
          ) : (
            'Add contact'
          )
        }
      />
    </Form>
  );
}
