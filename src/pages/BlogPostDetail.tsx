import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from "../types/blog"; 
import { mapWordPressPost } from "../utils/wordpress";
import NotFound from "./NotFound";
import { ChevronLeft, Clock } from 'lucide-react';

const WP_API_BASE = 'https://senska.onmy.cloud/wp-json/wp/v2';

const FullPostContent = ({ post }: { post: BlogPost }) => (
    <article className="max-w-3xl mx-auto mt-10">
        {post.featured_image_url && (
            <img src={post.featured_image_url} alt="" className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg" />
        )}

        <h1 className="text-5xl font-serif font-bold mb-6 text-foreground" dangerouslySetInnerHTML={{ __html: post.title }} />

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
            <span>By {post.authorName}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="flex items-center gap-1 font-bold text-primary"><Clock className="w-4 h-4" /> {post.readingTime}</span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{post.category}</span>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
);

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`);
        const data = await response.json();
        if (data.length > 0) setPost(mapWordPressPost(data[0]));
      } catch (err) { console.error(err); }
      finally { setIsLoading(false); }
    };
    fetchPost();
  }, [slug]);

  if (isLoading) return <div className="pt-32 text-center animate-pulse">Loading post...</div>;
  if (!post) return <NotFound />;

  return (
    <main className="pt-24 pb-20 container mx-auto px-4">
      <Link to="/blog" className="text-primary flex items-center gap-1 hover:underline mb-10">
        <ChevronLeft className="w-5 h-5" /> Back to All Posts
      </Link>
      <FullPostContent post={post} />
    </main>
  );
};

export default BlogPostDetail;