import { BlogPost, Author } from '../types/blog';

export const mapWordPressPost = (wpPost: any): BlogPost => {
  // 1. Extract Author from embedded data
  const embeddedAuthor = wpPost._embedded?.['author']?.[0];
  const author: Author | undefined = embeddedAuthor ? {
    id: embeddedAuthor.id,
    name: embeddedAuthor.name,
    description: embeddedAuthor.description,
    avatar_urls: embeddedAuthor.avatar_urls
  } : undefined;

  // 2. Extract Featured Image
  const featuredImage = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  // 3. Extract Category (WP returns IDs, so we find the name in embedded terms)
  const category = wpPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';

  return {
    id: wpPost.id,
    slug: wpPost.slug,
    title: wpPost.title.rendered, // Strips WP object wrapper
    content: wpPost.content.rendered,
    excerpt: wpPost.excerpt.rendered,
    date: wpPost.date,
    category: category,
    authorName: author?.name || 'Admin',
    featured_image_url: featuredImage,
    author: author
  };
};