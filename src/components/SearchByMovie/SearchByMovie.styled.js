import styled from 'styled-components';

export const SearchInput = styled.input`
  display: inline-block;
  border-radius: 4px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  border-color: #586974;
  outline: none;
  padding: 10px 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchBtn = styled.button`
  border: 1px solid #ffffff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  cursor: pointer;
  display: block;
  padding: 10px 4px;

  font-size: 17px;
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
    background-color: #ffffff;
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

// `;
// export const SearchFormInput = styled.input`
//   display: inline-block;
//   width: 100%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;

//   ::placeholder {
//     font: inherit;
//     font-size: 18px;
//   }
// `;

// /* CSS */
// .button-25 {
//   background-color: #36A9AE;
//   background-image: linear-gradient(#37ADB2, #329CA0);
//   border: 1px solid #2A8387;
//   border-radius: 4px;
//   box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: block;
//   font-family: -apple-system,".SFNSDisplay-Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
//   font-size: 17px;
//   line-height: 100%;
//   margin: 0;
//   outline: 0;
//   padding: 11px 15px 12px;
//   text-align: center;
//   transition: box-shadow .05s ease-in-out,opacity .05s ease-in-out;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 100%;
// }

// .button-25:hover {
//   box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset, rgba(0, 0, 0, 0.4) 0 1px 2px;
//   text-decoration: none;
//   transition-duration: .15s, .15s;
// }

// .button-25:active {
//   box-shadow: rgba(0, 0, 0, 0.15) 0 2px 4px inset, rgba(0, 0, 0, 0.4) 0 1px 1px;
// }
