import { useState, useEffect } from "react";
import axios from 'axios';
import {getJwt} from '../helpers/jwt'

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    
    const response = await axios.get(url, {headers: {Authorization: `Bearer ${getJwt()}`}});
    setData(response.data);
    setLoading(false);

  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];

}
export { useFetch };