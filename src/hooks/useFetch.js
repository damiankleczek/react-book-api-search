import { useState, useEffect } from 'react';

const useFetch = (url, searchTerm) => {
  const [data, setData] = useState(null);

  const searchData = async (url, searchTerm) => {
    const response = await fetch(`${url}?q=${searchTerm}`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    searchData(url, searchTerm);
  }, []);

  return data;
};

export default useFetch;
