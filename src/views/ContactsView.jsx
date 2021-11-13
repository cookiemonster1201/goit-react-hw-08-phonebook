import Hero from 'components/Hero/Hero';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import { ViewWrapper } from './views-styled';
import { useGetAllContactsQuery } from 'redux/contactsApi/contacts-slice';
import { footerHeight } from 'constants/constants';

export default function ContactsView() {
  const { data: contacts, isError } = useGetAllContactsQuery();
  console.log(contacts);

  return (
    <ViewWrapper
      style={{
        height:
          contacts && contacts.length > 0
            ? 'auto'
            : `calc(100vh - ${footerHeight}px)`,
      }}
    >
      <Hero />
      {contacts && <Filter contacts={contacts} />}
      <Footer />
    </ViewWrapper>
  );
}
