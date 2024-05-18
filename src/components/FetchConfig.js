import React, { useState } from 'react';
import axios from 'axios';
import './FetchConfig.css';

const FetchConfig = () => {
  const [configId, setConfigId] = useState('');
  const [configData, setConfigData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/api/configurations/${configId}`);
      setConfigData(response.data);
    } catch (error) {
      console.error(error);
      setConfigData(null);
    }
  };

  return (
    <div className="fetch-config">
      <h1>Fetch Configuration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
          placeholder="Enter Configuration ID"
        />
        <button type="submit">Submit</button>
      </form>
      {configData && (
        <div className="config-data">
          <h2>Configuration Data</h2>
          <pre>{JSON.stringify(configData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FetchConfig;
