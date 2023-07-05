import React from 'react';
import { Input, Label, Span } from './Filter.styled';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChangeFilter }) => {
  const inputId = nanoid(5);

  return (
    <div>
      <Label>
        <Span>Filter</Span>

        <Input
          onChange={onChangeFilter}
          value={value}
          type="text"
          id={inputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Label>
    </div>
  );
};
