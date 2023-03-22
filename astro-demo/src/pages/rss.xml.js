import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Astro Demo',
    description: 'Solo una demo',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/post/${post.slug}`,
    })),
  });
}
