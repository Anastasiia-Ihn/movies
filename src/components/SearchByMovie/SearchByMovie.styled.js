import styled from 'styled-components';

export const SearchInput = styled.input`
  display: inline-block;
  border-radius: 4px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 10px 40px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchBtn = styled.button`
  border: 1px solid ${p => p.theme.colors.white};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  cursor: pointer;
  display: block;
  padding: 10px 10px;

  line-height: 100%;
  margin: 0;
  outline: 0;
  text-align: center;

  margin-left: 24px;
  width: 80px;
  height: 43px;

  :hover,
  :focus {
    box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset,
      rgba(0, 0, 0, 0.4) 0 1px 2px;
    text-decoration: none;
    transition-duration: 0.15s, 0.15s;
    background-color: ${p => p.theme.colors.white};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;
