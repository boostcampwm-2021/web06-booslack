import { useState } from 'react';

// useMemo?
const initialData = {
  name: '',
  description: '',
  isPrivate: false,
};

const useCreateChannelInputs = () => {
  const [data, setData] = useState(initialData);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const clear = () => setData(initialData);

  return [data, onChange, clear];
};

export default useCreateChannelInputs;
