import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  ArrowRight,
  Clock,
  MailCheck,
  AlertCircle,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import jsonp from "jsonp";

// --- UPDATED CONFIGURATION FROM YOUR NEW EMBED CODE ---
const WP_API_BASE = "https://senska.onmy.cloud/wp-json/wp/v2";
// Note the 'us13' in the URL now
const MAILCHIMP_BASE_URL = "https://app.us13.list-manage.com/subscribe/post-json";
const U_ID = "1adcd2dd80d3098230b1d8d0e";
const LIST_ID = "b707af198e";
const F_ID = "0005eee7f0";
const HONEYPOT_NAME = "b_1adcd2dd80d3098230b1d8d0e_b707af198e";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form States
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch WordPress Posts
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${WP_API_BASE}/posts?per_page=12&_embed`);
        const data = await response.json();
        
        const mappedPosts = data.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          date: post.date,
          featured_image_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
          readingTime: Math.ceil(post.content.rendered.split(' ').length / 200) + " min"
        }));
        
        setBlogPosts(mappedPosts);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    // Build URL with updated parameters from your new embed code
    const params = new URLSearchParams({
      u: U_ID,
      id: LIST_ID,
      f_id: F_ID,
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
    });

    const url = `${MAILCHIMP_BASE_URL}?${params.toString()}`;

    jsonp(url, { param: "c" }, (err, data) => {
      if (err) {
        setStatus("error");
        setErrorMessage("Network error. Please try again.");
      } else if (data.result !== "success") {
        setStatus("error");
        setErrorMessage(data.msg.replace(/^\d\s-\s/, ""));
      } else {
        setStatus("success");
        setEmail("");
        setFirstName("");
        setLastName("");
      }
    });
  };

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Thoughts on Growth, Strategy, and Empowerment
        </p>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {isLoading
            ? [...Array(6)].map((_, i) => (
                <div key={i} className="h-[400px] w-full bg-muted animate-pulse rounded-xl" />
              ))
            : blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="hover-lift border-2 hover:border-primary h-full flex flex-col transition-all group">
                    {post.featured_image_url && (
                      <div className="overflow-hidden rounded-t-lg">
                         <img
                          src={post.featured_image_url}
                          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt=""
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />{" "}
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1 font-semibold text-primary">
                          <Clock className="w-3 h-3" /> {post.readingTime}
                        </div>
                      </div>
                      <CardTitle
                        className="font-serif text-xl line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div
                        className="text-sm text-muted-foreground line-clamp-3 mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                      <div className="mt-auto flex items-center text-primary font-bold text-sm">
                        Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-br from-secondary to-primary text-primary-foreground border-0 max-w-4xl mx-auto p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {status === "success" ? (
              <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                <div className="bg-white/20 p-4 rounded-full mb-6">
                  <MailCheck className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-3">You're In!</h2>
                <p className="text-primary-foreground/90 max-w-sm mx-auto mb-6">
                  Welcome to the community. You have been successfully subscribed.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary transition-colors"
                  onClick={() => setStatus("idle")}
                >
                  Subscribe another email
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Inspired</h2>
                <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
                  Insights on strategy and growth, delivered straight to your inbox.
                </p>

                <div className="max-w-xl mx-auto">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white/50 border-0 shadow-lg h-[56px]"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white/50 border-0 shadow-lg h-[56px]"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 items-center"> 
                      <input 
                        type="email" 
                        required 
                        placeholder="Your email address" 
                        className="w-full sm:flex-[2] px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white/50 border-0 shadow-lg h-[56px]" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                      <Button 
                        type="submit" 
                        disabled={status === 'loading'} 
                        className="w-full sm:flex-1 rounded-full h-[56px] bg-white text-primary font-bold shadow-md border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                        {status === 'loading' ? 'Joining...' : 'Subscribe'}
                      </Button>
                    </div>

                    {/* Updated Honeypot name from your new code */}
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input type="text" name={HONEYPOT_NAME} tabIndex={-1} value="" readOnly />
                    </div>
                  </form>

                  {status === "error" && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-red-100 bg-red-900/30 py-3 px-4 rounded-xl">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span
                        className="text-sm font-medium"
                        dangerouslySetInnerHTML={{ __html: errorMessage }}
                      />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </Card>
      </section>
    </main>
  );
};

export default Blog;