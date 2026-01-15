export interface Author {
    id: number;
    name: string;
    description?: string; 
    avatar_urls?: {
        [key: string]: string; 
    };
}

export interface BlogPost {
    id: number;
    slug: string;
    title: string;      
    content: string;    
    excerpt: string;    
    date: string;       
    category: string;   
    authorName: string; 
    featured_image_url?: string; 
    author?: Author;             
}

export type BlogPostSummary = Omit<BlogPost, 'content' | 'author'>;