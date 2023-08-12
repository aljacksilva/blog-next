import { useRouter } from 'next/router';
import Error from 'next/error';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { Post } from '@/containers/Post';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Página não encontrada, por favor aguarde...</div>;
  }

  if (!post?.title) return <Error statusCode={404} />;

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
    revalidate: 5,
  };
};
