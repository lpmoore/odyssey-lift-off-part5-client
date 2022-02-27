import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import GlobalStyles from './styles';
import Pages from './pages';
import React from 'react';
import ReactDOM from 'react-dom';

const client = new ApolloClient({
  uri: 'http://https://catstronautsapp.herokuapp.com',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
