import PropTypes from 'prop-types';
import {
  motion,
  AnimatePresence,
} from '../../../node_modules/framer-motion/dist/framer-motion';
import ContactsListItem from 'components/ContactsList/ContactsListItem/ContactsListItem';
import { Ul, Li, P } from './ContactsList-styled';

export default function ContactsList({ filteredContacts }) {
  return (
    <>
      {filteredContacts.length > 0 ? (
        <Ul as={motion.ul} layout>
          <AnimatePresence>
            {[...filteredContacts]
              .sort((contactA, contactB) =>
                contactA.name.localeCompare(contactB.name),
              )
              .map(contact => (
                <Li
                  key={contact.id}
                  as={motion.li}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ContactsListItem
                    contact={contact}
                    allContacts={filteredContacts}
                  />
                </Li>
              ))}
          </AnimatePresence>
        </Ul>
      ) : (
        <P as={motion.p} layout>
          Sorry, no contacts found
        </P>
      )}
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
