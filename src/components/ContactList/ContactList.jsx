import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { TitleH2, Ul } from './ContactList.styled';
import { Filter } from 'components/Filter/Filter';
import PropTypes from 'prop-types';


export const ContactList = ({
  title,
  contacts,
  onRemoveContact,
  onChangeFilter,
  filteredContacts,
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
            onRemoveContact={onRemoveContact}
            filteredContacts={filteredContacts}
          />
        </Ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
