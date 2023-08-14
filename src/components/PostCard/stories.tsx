import { PostCard, PostCardProps } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'PostCard',
  component: PostCard,
} as Meta;

export const Primary: Story<PostCardProps> = (args) => <PostCard {...args} />;
