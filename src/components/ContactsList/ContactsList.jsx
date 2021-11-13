import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsList/ContactsListItem/ContactsListItem';
import { Ul, Li, P } from './ContactsList-styled';

export default function ContactsList({ filteredContacts }) {
  return (
    <>
      {filteredContacts.length > 0 ? (
        <Ul>
          {[...filteredContacts]
            .sort((contactA, contactB) =>
              contactA.name.localeCompare(contactB.name),
            )
            .map(contact => (
              <Li key={contact.id}>
                <ContactsListItem
                  contact={contact}
                  allContacts={filteredContacts}
                />
              </Li>
            ))}
        </Ul>
      ) : (
        <P>Sorry, no contacts found</P>
      )}
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
