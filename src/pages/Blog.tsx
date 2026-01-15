import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BlogPostSummary } from "../types/blog"; 
import { mapWordPressPost } from "../utils/wordpress";

const WP_API_BASE = 'https://senska.onmy.cloud/wp-json/wp/v2';
const WP_CF7_BASE = 'https://senska.onmy.cloud/wp-json/contact-form-7/v1';
// const NEWSLETTER_FORM_ID = 'YOUR_NEWSLETTER_ID'; // Ensure this is set

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${WP_API_BASE}/posts?per_page=12&_embed`);
        const data = await response.json();
        setBlogPosts(data.map((post: any) => mapWordPressPost(post)));
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const body = new FormData();
    body.append("your-email", email);
    try {
      const res = await fetch(`${WP_CF7_BASE}/contact-forms/${NEWSLETTER_FORM_ID}/feedback`, {
        method: 'POST',
        body: body,
      });
      const result = await res.json();
      if (result.status === 'mail_sent') {
        setStatus('success');
        setEmail('');
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <main className="pt-24 pb-20">
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Thoughts on Growth, Strategy, and Empowerment</p>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card className="hover-lift border-2 hover:border-primary h-full flex flex-col transition-all">
                {post.featured_image_url && <img src={post.featured_image_url} className="h-48 w-full object-cover rounded-t-lg" alt="" />}
                <CardHeader>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString()}</div>
                    <div className="flex items-center gap-1 font-semibold text-primary"><Clock className="w-3 h-3" /> {post.readingTime}</div>
                  </div>
                  <CardTitle className="font-serif text-xl line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title }} />
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-sm text-muted-foreground line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <Button variant="ghost" className="w-full justify-between group pointer-events-none">Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-secondary to-primary text-primary-foreground border-0 max-w-4xl mx-auto p-12 text-center shadow-xl">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Inspired</h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" required placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md text-foreground" 
              value={email} onChange={(e) => setEmail(e.target.value)} 
            />
            <Button type="submit" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-white hover:text-primary">
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </Card>
      </section>
    </main>
  );
};

export default Blog;