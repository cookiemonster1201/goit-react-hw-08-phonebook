import { useState } from 'react';
import PropTypes from 'prop-types';
import ContactsList from 'components/ContactsList/ContactsList';
import filterContacts from 'utils/filter-contacts';
import { FilterInput } from './styled';

export default function Filter({ contacts }) {
  const [inputValue, setInputValue] = useState('');
  const filteredContacts = filterContacts(contacts, inputValue);

  return (
    <>
      {contacts?.length > 0 && (
        <>
          <FilterInput
            type="text"
            name="filter"
            value={inputValue}
            id="my-contacts"
            onChange={({ target: { value } }) => setInputValue(value)}
            placeholder="Search Contacts"
          />

          <ContactsList filteredContacts={filteredContacts} />
        </>
      )}
    </>
  );
}

Filter.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
