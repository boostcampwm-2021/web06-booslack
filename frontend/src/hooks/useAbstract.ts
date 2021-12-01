import axios from 'axios';
import { useQuery } from 'react-query';
import { PREFIX } from '@global/api';
import { hourlyExpirationOption } from '@global/options';

export const useAbstractQuery = (
  name: string,
  id: string,
  path: undefined | string = undefined,
  option: typeof Object = undefined,
) => {
  const realPath = path || `${name}s`;
  return useQuery(
    [name, id],
    async () => {
      const res = await axios.get(`${PREFIX}/${realPath}/${id}`);
      return res?.data[name];
    },
    {
      ...hourlyExpirationOption,
      ...option,
    },
  );
};

export const useAbstractQueryList = (
  name: string,
  id: string,
  params: any,
  path: undefined | string = undefined,
  option: typeof Object = undefined,
) => {
  const realPath = path || `${name}`;

  return useQuery(
    [name, id],
    async () => {
      const res = await axios.get(`${PREFIX}/${realPath}`, {
        params: { ...params },
      });
      return res?.data[name];
    },
    {
      ...hourlyExpirationOption,
      ...option,
    },
  );
};
