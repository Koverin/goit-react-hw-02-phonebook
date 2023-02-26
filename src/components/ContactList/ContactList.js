import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Title } from './ContactList.styled';

export const ContactList = ({ contacts, onDeletedContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Title>
            {name}: {number}
          </Title>
          <button type="button" onClick={() => onDeletedContact(id)}>
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
