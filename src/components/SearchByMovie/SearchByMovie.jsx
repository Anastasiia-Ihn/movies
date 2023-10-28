import { useState } from 'react';
import { SearchBtn, SearchInput, SearchForm } from './SearchByMovie.styled';

export const SearchByMovie = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  return (
    <SearchForm
      onSubmit={e => {
        onSubmit(e);
      }}
    >
      <SearchInput
        type="text"
        placeholder="Search movies"
        value={value}
        onChange={handleChange}
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
