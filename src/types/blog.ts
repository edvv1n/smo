export interface Author {
    name: string;
    authorImage?: string; // URL from Sanity
    bio?: any; // Sanity Block Content
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string; // Used for index page summary
    date: string; // PublishedAt from Sanity
    category: string; // Category title
    authorName: string; // Used for index page
    mainImageUrl?: string; // URL for the main image
    body?: any; // Sanity Block Content (Full post)
    author?: Author; // Full author object for detail page
}

export interface BlogPostSummary extends Omit<BlogPost, 'body' | 'mainImageUrl' | 'author'> {}