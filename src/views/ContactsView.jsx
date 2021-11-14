import Hero from 'components/Hero/Hero';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import { ViewWrapper } from './views-styled';
import { useGetAllContactsQuery } from 'redux/contactsApi/contacts-slice';
import { footerHeight } from 'constants/constants';
import { useEffect } from 'react';
import {
  AnimateSharedLayout,
  motion,
} from '../../node_modules/framer-motion/dist/framer-motion';

export default function ContactsView() {
  const { data: contacts, refetch } = useGetAllContactsQuery();

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, []);

  return (
    <AnimateSharedLayout>
      <ViewWrapper
        style={{
          height:
            contacts && contacts.length > 0
              ? 'auto'
              : `calc(100vh - ${footerHeight}px)`,
        }}
      >
        <Hero />
        <motion.div layout>
          {contacts && <Filter contacts={contacts} />}
          <Footer />
        </motion.div>
      </ViewWrapper>
    </AnimateSharedLayout>
  );
}
