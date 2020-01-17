import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #eeeeee;
    color: #333;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  .grid-container {
    display: grid;

    grid-template-columns: 15% 1fr;
    grid-template-rows: 60px 1fr;

    grid-template-areas:

    "sidebar head head head"
    "sidebar navbar navbar navbar"
    "sidebar main main main"
    "sidebar main main main";

    /* grid-container height = 100% of viewport height */
    height: 100vh;
  }

  .grid-sidebar {
    grid-area: sidebar;
  }

  @media screen and (max-width: 375px) {
    .grid-container {
      grid-template-columns: 1fr;
      grid-template-rows: 60px 1fr;
      grid-template-areas:
      "head"
      "main";
    }
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
