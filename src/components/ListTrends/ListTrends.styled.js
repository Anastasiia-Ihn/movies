import styled from 'styled-components';

export const ListTrendsStyled = styled.ul`
  color: ${p => p.theme.colors.active};
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 50px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemList = styled.li`
  background-color: ${p => p.theme.colors.darkPurple};
  border-radius: 5px;
  box-shadow: 10px 11px 10px 2px rgba(34, 60, 80, 0.2);
  overflow: hidden;
  height: 418px;
  :focus,
  :hover {
    cursor: pointer;
  }
  & img {
    display: block;

    width: 100%;
  }
  & h3 {
    padding: 8px 12px;
    line-height: 1.36;

    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
