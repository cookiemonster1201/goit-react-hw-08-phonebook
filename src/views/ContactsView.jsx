import Loader from 'react-loader-spinner';
import Hero from 'components/Hero/Hero';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import { ViewWrapper } from './styled';
import { useGetAllContactsQuery } from 'redux/contactsApi/contacts-slice';

export default function ContactsView() {
  const { data: contacts, isError } = useGetAllContactsQuery();
  return (
    <ViewWrapper>
      <Hero />
      {isError ? (
        <p>Oops, something went wrong(</p>
      ) : (
        <Filter contacts={contacts} />
      )}
      <Footer />
    </ViewWrapper>
  );
}
