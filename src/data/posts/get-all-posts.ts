import { POST_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import { fecthJson } from '@/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POST_URL}&${query}`;
  const posts = await fecthJson<PostData[]>(url);

  return posts;
};
