import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "From Seed to Success: The Art of Patient Growth",
      excerpt:
        "Just as a seed needs the right soil, water, and sunlight to grow, your business or nonprofit needs the right foundation, resources, and nurturing to thrive. Learn the principles of patient, strategic growth.",
      date: "March 15, 2025",
      category: "Strategy",
    },
    {
      title: "Building Bridges: The Power of Cultural Exchange",
      excerpt:
        "In our interconnected world, understanding across cultures isn't just nice to have—it's essential. Discover how cultural exchange can transform your approach to leadership and collaboration.",
      date: "March 8, 2025",
      category: "Leadership",
    },
    {
      title: "The Nonprofit Blueprint: 5 Essential Steps to Launch",
      excerpt:
        "Starting a nonprofit is more than passion—it requires structure, strategy, and sustainability. Here are the five critical steps every founder must take to build a lasting organization.",
      date: "February 28, 2025",
      category: "Nonprofit",
    },
    {
      title: "Empowerment Through Action: Why Women Need Strategic Support",
      excerpt:
        "Empowerment isn't just about inspiration—it's about providing concrete tools and strategic guidance. Let's explore why women entrepreneurs and nonprofit leaders need more than motivation.",
      date: "February 20, 2025",
      category: "Empowerment",
    },
    {
      title: "The Newcomer's Advantage: Fresh Perspectives in Business",
      excerpt:
        "Being new to a market isn't a disadvantage—it's an opportunity. Learn how newcomers can leverage their unique perspective while navigating cultural and regulatory challenges.",
      date: "February 10, 2025",
      category: "Business",
    },
    {
      title: "Balance and Growth: Lessons from My Garden",
      excerpt:
        "What my garden teaches me about business, life, and the importance of tending to what matters. A reflection on balance, seasons, and sustainable growth.",
      date: "January 30, 2025",
      category: "Personal Growth",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover-lift hover-glow border-2 hover:border-primary transition-all duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 w-fit">
                  {post.category}
                </span>
                <CardTitle className="font-serif text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
                <Button variant="ghost" className="w-full justify-between group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-foreground"
              />
              <Button
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Blog;
