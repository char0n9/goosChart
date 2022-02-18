/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import QueryResult from './Components/QueryResult';

function App() {
  const [sampleInput, setSampleInput] = useState(0);
  const [sampleSize, setSampleSize] = useState(0);
  const POSTS = gql`
    query getAllPosts {
      allPosts(count:${sampleSize}){
        id
        title
        createdAt
      }
    }
  `;
  const handleSubmit = (e) => {
    e.preventDefault();
    setSampleSize(sampleInput);
  };
  const { loading, error, data } = useQuery(POSTS);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Sample Size:
          <input type="number" value={sampleInput} onChange={(e) => setSampleInput(Number(e.target.value))} />
        </label>
        <button type="submit"> Generate graph !</button>
      </form>
      <QueryResult loading={loading} error={error} data={data} />
    </div>
  );
}

export default App;
