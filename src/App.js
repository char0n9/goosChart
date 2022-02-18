import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { parseData } from './Helpers/parse-data';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  if (data) {
    const parsedData = parseData(data.allPosts);
    return (
      <div>
        {parsedData.map((item) => (
          <p>
            Month:
            {' '}
            {item.month}
            {' '}
            | Count:
            {' '}
            {item.postCount}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
