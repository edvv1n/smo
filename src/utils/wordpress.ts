import { BlogPost, Author } from '../types/blog';


const calculateReadTime = (html: string): string => {
  const wordsPerMinute = 200;
  // Remove HTML tags to get clean text for word count
  const cleanText = html.replace(/<\/?[^>]+(>|$)/g, "");
  const wordCount = cleanText.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

export const mapWordPressPost = (wpPost: any): BlogPost => {
  const embeddedAuthor = wpPost._embedded?.['author']?.[0];
  const author: Author | undefined = embeddedAuthor ? {
    id: embeddedAuthor.id,
    name: embeddedAuthor.name,
    description: embeddedAuthor.description,
    avatar_urls: embeddedAuthor.avatar_urls
  } : undefined;

  const featuredImage = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = wpPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
  const rawContent = wpPost.content.rendered;

  return {
    id: wpPost.id,
    slug: wpPost.slug,
    title: wpPost.title.rendered,
    content: rawContent,
    excerpt: wpPost.excerpt.rendered,
    date: wpPost.date,
    category: category,
    authorName: author?.name || 'Admin',
    featured_image_url: featuredImage,
    author: author,
    readingTime: calculateReadTime(rawContent)
  };
};