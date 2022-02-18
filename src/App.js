import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import QueryResult from './Components/QueryResult';

function App() {
  const POSTS = gql`
    query getAllPosts {
      allPosts(count:55){
        id
        title
        createdAt
      }
    }
  `;

  const { loading, error, data } = useQuery(POSTS);

  return <QueryResult loading={loading} error={error} data={data} />;
}

export default App;
