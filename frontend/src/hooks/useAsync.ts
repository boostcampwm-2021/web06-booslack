import { useState, useEffect } from 'react';
import axios from 'axios';

interface Data {
  data?: unknown;
}

type METHOD = 'GET' | 'POST' | 'DELETE' | 'UPDATE';

const getAxios = async (Path: string, JSON: Data): Promise<Data> => {
  return axios.get(Path, JSON);
};

const postAxios = async (Path: string, JSON: Data): Promise<Data> => {
  return axios.post(Path, JSON);
};

const deleteAxios = (Path: string, JSON: Data): Promise<Data> => {
  return axios.delete(Path, JSON);
};

const updateAxios = async (Path: string, JSON: Data): Promise<Data> => {
  return axios.put(Path, JSON);
};

const getAxiosByMethod = (method: METHOD) => {
  if (method === 'POST') return postAxios;
  if (method === 'DELETE') return deleteAxios;
  if (method === 'UPDATE') return updateAxios;
  return getAxios;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useAsync(json: Data, path: string, deps = [], method: METHOD = 'GET') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);

  const AxiosFunction = getAxiosByMethod(method);

  const fetchRequest = async (): Promise<void> => {
    setError(null);
    setData(null);
    setLoading(true);
    try {
      const response = await AxiosFunction(path, json);
      setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRequest();
  }, deps);

  return [data, loading, error, fetchRequest];
}

export default useAsync;
