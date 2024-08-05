import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData(url);
  }, []);
  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
