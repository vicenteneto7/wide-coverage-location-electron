import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  font-size: 1.6rem;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
}

@media (max-width: 720px) {
  .text {
    font-size: 20px;
  }
}

@media (max-width: 620px) {
  .versions {
    display: none;
  }
}

@media (max-width: 350px) {
  .tip,
  .actions {
    display: none;
  }
}

`
