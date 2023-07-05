import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { TitleH2, Ul } from './ContactList.styled';
import { Filter } from 'components/Filter/Filter';

export const ContactList = ({
  title,
  contacts,
  onRemoveContact,
  onChangeFilter,
  filteredContacts,
  filter,
}) => {
  return (
    <>
      <TitleH2>{title}</TitleH2>

      {contacts.length > 0 ? (
        <Filter onChangeFilter={onChangeFilter} />
      ) : (
        alert('Your phonebook is empty. Add first contact!')
      )}
      {contacts.length > 0 && (
        <Ul>
          <Contact
            contacts={contacts}
            onRemoveContact={onRemoveContact}
            filteredContacts={filteredContacts}
            filter={filter}
          />
        </Ul>
      )}
    </>
  );
};

ContactList.propTypes = {};
