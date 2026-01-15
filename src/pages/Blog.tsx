import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BlogPostSummary } from "../types/blog"; 
import { mapWordPressPost } from "../utils/wordpress"; // Ensure this helper exists

// --- UPDATED: WordPress API Configuration ---
const WP_API_BASE = 'https://senska.onmy.cloud/wp-json/wp/v2';
// --------------------------------------------

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Fetch blog posts from WordPress
  useEffect(() => {
    const fetchPosts = async () => {
        setIsLoading(true);
        // We use _embed to get featured images and category names
        const apiUrl = `${WP_API_BASE}/posts?per_page=12&_embed`; 
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            // Map the raw WordPress objects into our clean BlogPostSummary type
            const cleanedPosts: BlogPostSummary[] = data.map((post: any) => mapWordPressPost(post));
            setBlogPosts(cleanedPosts);
        } catch (error) {
            console.error("Failed to fetch blog posts from WordPress:", error);
        } finally {
            setIsLoading(false);
        }
    };
    fetchPosts();
  }, []); 

  // Newsletter Logic (Kept as is - note that you may need a WP plugin like Mailchimp for WP later)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    
    // Logic for newsletter remains the same unless you move your newsletter to WordPress too
    try {
      // Your existing Firebase/Third-party newsletter logic...
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2 animate-fade-in-up">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Thoughts on Growth, Strategy, and Empowerment
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-5">
        {isLoading && <p className="text-center text-xl text-muted-foreground">Loading posts...</p>}
        {!isLoading && blogPosts.length === 0 && <p className="text-center text-xl text-muted-foreground">No posts found.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
                <Card className="hover-lift hover-glow border-2 hover:border-primary transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {post.featured_image_url && ( 
                    <img 
                        src={post.featured_image_url} 
                        alt={post.title} 
                        className="w-full h-48 object-cover rounded-t-lg" 
                    />
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span> 
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 w-fit">
                      {post.category}
                    </span>
                    {/* Render Title using innerHTML to handle WP entities like &amp; */}
                    <CardTitle 
                      className="font-serif text-xl" 
                      dangerouslySetInnerHTML={{ __html: post.title }} 
                    />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    {/* Render Excerpt using innerHTML because WP wraps it in <p> tags */}
                    <div 
                      className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3" 
                      dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                    />
                    <Button variant="ghost" className="w-full justify-between group pointer-events-none">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-secondary to-primary text-primary-foreground border-0 max-w-4xl mx-auto animate-scale-in hover-lift">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Inspired</h2>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to receive new insights on growth, strategy, and empowerment delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                }}
                required
                disabled={status === 'loading'}
              />
              <Button
                type="submit"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 
                 status === 'success' ? 'Subscribed! 🎉' : 
                 status === 'error' ? 'Try Again' : 'Subscribe'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Blog;