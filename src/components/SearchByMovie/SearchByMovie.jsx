import { useState } from 'react';
import { SearchBtn, SearchInput, SearchForm } from './SearchByMovie.styled';

export const SearchByMovie = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handlerClickOnFormSubmit = evt => {
    evt.preventDefault();

    if (evt.target.value?.trim() === '') {
      return 'error';
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchForm onSubmit={handlerClickOnFormSubmit}>
      <SearchInput
        type="text"
        placeholder="Search movies"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
