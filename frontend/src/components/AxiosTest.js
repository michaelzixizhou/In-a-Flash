import axios from "axios";
import React, { useState } from "react";

function AxiosTest() {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/hello_world/", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Key"
        onChange={(e) => setData({ ...data, key: e.target.value })}
      />
      <input
        type="text"
        placeholder="Value"
        onChange={(e) => setData({ ...data, value: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AxiosTest;
