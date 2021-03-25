import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';

import Header from './components/header/header';
import Routes from './routes';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
