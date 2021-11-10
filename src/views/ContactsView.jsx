import Loader from 'react-loader-spinner';
import Hero from 'components/Hero/Hero';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import { ViewWrapper } from './styled';
import { useGetAllContactsQuery } from 'redux/contactsApi/contacts-slice';

export default function ContactsView() {
  const { data: contacts, isFetching: isLoading } = useGetAllContactsQuery();
  return (
    <ViewWrapper>
      <Hero />
      {isLoading ? (
        <Loader
          type="Oval"
          color="#da5f01"
          height={13}
          width={13}
          style={{ margin: '0 auto' }}
        />
      ) : (
        <>
          <Filter contacts={contacts} />
          <Footer />
        </>
      )}
    </ViewWrapper>
  );
}
