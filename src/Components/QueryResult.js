import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import BarGraph from "./BarGraph";
import { parseData } from '../Helpers/parse-data';

function QueryResult({ loading, error, data }) {
  if (error) {
    return (
      <p>
        ERROR:
        {' '}
        {error.message}
      </p>
    );
  }
  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    const parsedData = parseData(data.allPosts);
    return <BarGraph data={parsedData} width={800} height={500}/>;
  }
}

export default QueryResult;
