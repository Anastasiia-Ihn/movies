import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

li{
  text-decoration: none;
   list-style: none;
}

`;

// :root {
//   /* Fonds */
//   --primary-font: "Roboto", sans-serif;
//   --secondery-font: "Raleway", sans-serif;

//   /* Color */
//   --primary-text-color: #434455;
//   --title-text-color: #2e2f42;

//   --color-iris: #4d5ae5;
//   --color-ocean: #404bbf;
//   --color-green: #31d0aa;
//   --color-light-slate: #8e8f99;
//   --color-cornflower: #e7e9fc;
//   --color-cloud: #f4f4fd;
//   --color-navy-blue-modal: #2e2f42;
//   --color-grey: #2e2f42;
//   --color-white: #ffffff;
//   --color-dairy: #fcfcfc;
//   --color-bg: #e5e5e5;
//   --color-modal: rgba(46, 47, 66, 0.4);
//   /* animation */
//   --animation: 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// body {
//   font-family: var(--primary-font);
//   letter-spacing: 0.02em;
//   color: var(--primary-text-color);
//   background-color: var(--color-white);
// }
