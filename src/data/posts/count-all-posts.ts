import { POST_URL } from '@/config/app-config';
import { fecthJson } from '@/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POST_URL}/count?${query}`;
  const numberOfPosts = await fecthJson<string>(url);

  return numberOfPosts;
};
