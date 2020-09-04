import React from 'react';
import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/index'
import SearchProvider from './store/index'

const App = () => (
  <>
    <GlobalStyle />
    <SearchProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </SearchProvider>



  </>


)

export default App;
