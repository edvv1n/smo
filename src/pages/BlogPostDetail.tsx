import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from "../types/blog"; 
import { mapWordPressPost } from "../utils/wordpress"; // Assuming you saved the helper here
import NotFound from "./NotFound";
import { ChevronLeft } from 'lucide-react';

// --- CONFIGURATION ---
const WP_API_BASE = 'https://senska.onmy.cloud/wp-json/wp/v2';

const FullPostContent = ({ post }: { post: BlogPost }) => (
    <article className="max-w-3xl mx-auto mt-10">
        {/* Render WordPress Featured Image */}
        {post.featured_image_url && (
            <img 
                src={post.featured_image_url} 
                alt={post.title} 
                className="w-full h-96 object-cover rounded-lg mb-8" 
            />
        )}

        {/* WP titles often contain HTML entities (e.g., &amp;), so we use dangerouslySetInnerHTML */}
        <h1 
            className="text-5xl font-serif font-bold mb-4 text-foreground"
            dangerouslySetInnerHTML={{ __html: post.title }}
        />

        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
            <span>By {post.authorName}</span> 
            <span>|</span>
            <span>{new Date(post.date).toLocaleDateString(undefined, { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })}</span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full w-fit">
                {post.category}
            </span>
        </div>
        
        {/* The 'prose' class comes from @tailwindcss/typography. 
            It is essential for styling raw HTML (h2, p, ul, etc.) from WordPress.
        */}
        <div 
            className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
    </article>
);


const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
        setIsLoading(true);
        setError(null);

        // _embed is critical to get images and author data in one request
        const apiUrl = `${WP_API_BASE}/posts?slug=${slug}&_embed`; 
        
        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            
            const data = await response.json();

            if (data && data.length > 0) {
                // Use the helper to transform the raw WP JSON to our BlogPost type
                const cleanedPost = mapWordPressPost(data[0]);
                setPost(cleanedPost);
            } else {
                setPost(null); // Results in NotFound
            }
        } catch (err) {
            console.error("Failed to fetch WordPress post:", err);
            setError("Could not load the post. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    fetchPost();
  }, [slug]); 

  if (isLoading) {
    return (
        <div className="pt-24 pb-20 container mx-auto px-4 text-center animate-pulse">
            Loading post content...
        </div>
    ); 
  }

  if (error) {
    return <div className="pt-24 text-center text-red-500">{error}</div>;
  }

  if (!post) {
    return <NotFound />; 
  }

  return (
    <main className="pt-24 pb-20 container mx-auto px-4">
      <Link to="/blog" className="group text-primary hover:text-accent flex items-center space-x-1 mt-6 transition-colors">
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to All Posts</span>
      </Link>
      
      <FullPostContent post={post} />
    </main>
  );
};

export default BlogPostDetail;