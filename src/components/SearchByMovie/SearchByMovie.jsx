// import { useState } from 'react';
import { SearchBtn, SearchInput, SearchForm } from './SearchByMovie.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchByMovie = ({ onSubmit }) => {
  // const [value, setValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query') ?? '';

  const handleChangeQuery = evt => {
    searchParams.set('query', evt.target.value.trim());
    setSearchParams(searchParams);
  };

  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <SearchInput
        type="text"
        placeholder="Search movies"
        value={currentQuery}
        onChange={handleChangeQuery}
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
