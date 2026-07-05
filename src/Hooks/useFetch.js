import { useState, useEffect } from "react";

function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

  if (!url) {
    setData(null);
    setError("");
    setLoading(false);
    return;
  }

  const controller = new AbortController();

  async function fetchData() {

    try {
      setLoading(true);
      setError("");

      const response = await fetch(url, {signal: controller.signal});
      if (!response.ok) {
        throw new Error("User not found");
      }
      const result = await response.json();
      setData(result);
    }
    catch (err) {
    if (err.name !== "AbortError") {
        setError(err.message);
        }
    }
    finally{
      setLoading(false);
    }
  }
  fetchData();
  return () => {
    controller.abort();
};
}, [url]);

  return { data, loading, error };

}

export default useFetch;