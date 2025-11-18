export interface BlogPost {
  slug: string; // Used for unique URL (e.g., /blog/seed-to-success)
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "seed-to-success",
    title: "From Seed to Success: The Art of Patient Growth",
    excerpt:
      "Just as a seed needs the right soil, water, and sunlight to grow, your business or nonprofit needs the right foundation, resources, and nurturing to thrive. Learn the principles of patient, strategic growth.",
    date: "March 15, 2025",
    category: "Strategy",
    author: "Senska",
    imageUrl: "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Seed+to+Success" // Placeholder image
  },
  {
    slug: "building-bridges",
    title: "Building Bridges: The Power of Cultural Exchange",
    excerpt:
      "In our interconnected world, understanding across cultures isn't just nice to have—it's essential. Discover how cultural exchange can transform your approach to leadership and collaboration.",
    date: "March 8, 2025",
    category: "Leadership",
    author: "Senska",
    imageUrl: "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Building+Bridges" // Placeholder image
  },
  {
    slug: "nonprofit-blueprint",
    title: "The Nonprofit Blueprint: 5 Essential Steps to Launch",
    excerpt:
      "Starting a nonprofit is more than passion—it requires structure, strategy, and sustainability. Here are the five critical steps every founder must take to build a lasting organization.",
    date: "February 28, 2025",
    category: "Nonprofit",
    author: "Senska",
    imageUrl: "https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Nonprofit+Blueprint" // Placeholder image
  },
  {
    slug: "empowerment-through-action",
    title: "Empowerment Through Action: Why Women Need Strategic Support",
    excerpt:
      "Empowerment isn't just about inspiration—it's about providing concrete tools and strategic guidance. Let's explore why women entrepreneurs and nonprofit leaders need more than motivation.",
    date: "February 20, 2025",
    category: "Empowerment",
    author: "Senska",
    imageUrl: "https://via.placeholder.com/600x400/F033FF/FFFFFF?text=Empowerment+Action" // Placeholder image
  },
  {
    slug: "newcomers-advantage",
    title: "The Newcomer's Advantage: Fresh Perspectives in Business",
    excerpt:
      "Being new to a market isn't a disadvantage—it's an opportunity. Learn how newcomers can leverage their unique perspective while navigating cultural and regulatory challenges.",
    date: "February 10, 2025",
    category: "Business",
    author: "Senska",
    imageUrl: "https://via.placeholder.com/600x400/FF33A8/FFFFFF?text=Newcomer%27s+Advantage" // Placeholder image
  },
  {
    slug: "balance-and-growth",
    title: "Balance and Growth: Lessons from My Garden",
    excerpt:
      "What my garden teaches me about business, life, and the importance of tending to what matters. A reflection on balance, seasons, and sustainable growth.",
    date: "January 30, 2025",
    category: "Personal Growth",
    author: "Senska",
    imageUrl: "https://via.placeholder.com/600x400/33FFF0/FFFFFF?text=Balance+Growth" // Placeholder image
  },
];