import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsList/ContactsListItem/ContactsListItem';
import { Ul, Li, P } from './styled';

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
                <ContactsListItem contact={contact} />
              </Li>
            ))}
        </Ul>
      ) : (
        <P>Sorry, no contacts found</P>
      )}
    </>
  );
}

ContactsListItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
