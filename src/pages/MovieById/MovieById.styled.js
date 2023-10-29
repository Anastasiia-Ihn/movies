import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  border: 1px solid;
  border-radius: 4px;
  width: 120px;
  padding: 8px;
  & :hover,
  :focus {
    color: red;
  }
`;
