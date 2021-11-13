import { showErrorNotification } from './notifications';
export default function doesContactExist(contacts, name, number) {
  const doesExist = contacts.some(
    contact => name === contact.name || number === contact.number,
  );
  if (doesExist) {
    showErrorNotification(`Sorry, ${name} already exists`);
    return true;
  } else {
    return false;
  }
}
