import React, { useState } from 'react';
import axios from 'axios';
import './UpdateRemark.css';

const UpdateRemark = () => {
  const [configId, setConfigId] = useState('');
  const [remark, setRemark] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/configurations/${configId}`, { remark });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error updating remark');
    }
  };

  return (
    <div className="update-remark">
      <h1>Update Remark</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
          placeholder="Enter Configuration ID"
        />
        <textarea
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          placeholder="Enter Remark"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateRemark;
