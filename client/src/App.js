import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

// links client to server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// caches API response data for efficient requests
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(), 
});

function App() {
  return (
    // integrates the entire application with the Apollo provider
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
