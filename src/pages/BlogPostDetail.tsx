import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from "../types/blog"; 
import NotFound from "./NotFound";
import { ChevronLeft } from 'lucide-react';

// --- UPDATED: Firebase Base URL Placeholder ---
const FIREBASE_FUNCTIONS_BASE_URL = 'https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net';
// ----------------------------------------------

// NOTE: You would need to install and use a library like @portabletext/react 
// to properly render Sanity's Block Content (post.body).
const PortableTextPlaceholder = ({ blocks }: { blocks: any }) => {
    if (!blocks) return <p>Loading content...</p>;
    // In a real app, this renders the blocks:
    // <PortableText value={blocks} components={...} />
    return (
        <div className="space-y-6">
            <p>--- Post body content successfully fetched ---</p>
            <p>This is where the rich text content from Sanity's body field would be rendered using a Portable Text React component.</p>
            <p className="font-mono text-xs text-muted-foreground">Length of body array: {blocks.length || 'N/A'}</p>
        </div>
    );
};


const FullPostContent = ({ post }: { post: BlogPost }) => (
    <article className="max-w-3xl mx-auto mt-10">
        {/* Render Sanity main image */}
        {post.mainImageUrl && (
            <img 
                src={post.mainImageUrl} 
                alt={post.title} 
                className="w-full h-64 object-cover rounded-lg mb-8" 
            />
        )}
        <h1 className="text-5xl font-serif font-bold mb-4 text-foreground">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
            {/* Use post.author.name from the detail fetch */}
            <span>By {post.author?.name || 'Unknown Author'}</span> 
            <span>|</span>
            <span>{post.date}</span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full w-fit">
                {post.category}
            </span>
        </div>
        
        <div className="prose max-w-none text-foreground leading-relaxed">
            {/* The Sanity body content is rendered here */}
            <PortableTextPlaceholder blocks={post.body} />
        </div>
        
    </article>
);


const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch individual post data from the Firebase API (HTTP Function: 'getBlogPostBySlug')
  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
        setIsLoading(true);
        // TARGET: The deployed HTTP function with the slug as a query parameter
        const apiUrl = `${FIREBASE_FUNCTIONS_BASE_URL}/getBlogPostBySlug?slug=${slug}`; 
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                if (response.status === 404) {
                    setPost(null);
                    return;
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: BlogPost = await response.json();
            setPost(data);
        } catch (error) {
            console.error("Failed to fetch blog post details:", error);
        } finally {
            setIsLoading(false);
        }
    };
    fetchPost();
  }, [slug]); 

  if (isLoading) {
    return <main className="pt-24 pb-20 container mx-auto px-4 text-center">Loading post details...</main>; 
  }

  if (!post) {
    return <NotFound />; 
  }

  return (
    <main className="pt-24 pb-20 container mx-auto px-4">
      <Link to="/blog" className="text-primary hover:text-accent flex items-center space-x-1 mt-6 transition-colors">
        <ChevronLeft className="w-5 h-5" />
        <span>Back to All Posts</span>
      </Link>
      
      <FullPostContent post={post} />
    </main>
  );
};

export default BlogPostDetail;