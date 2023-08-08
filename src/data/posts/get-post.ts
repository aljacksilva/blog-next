import { POST_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import { fecthJson } from '@/utils/fetch-json';
import { markDownToHtml } from '@/utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}?slug=${slugString}`;
  const jsonPosts = await fecthJson<PostData[]>(url);
  const content = await markDownToHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], content };

  return [finalContent];
};
