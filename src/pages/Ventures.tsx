import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react"; // Keep ExternalLink for the button icon
import globalImage from "@/assets/global-exchange.jpg";

// 1. IMPORT ALL LOCAL LOGOS (Assuming these paths are correct)
import gwceLogo from "@/assets/gweclogo.svg"; // Already imported
import wvLogo from "@/assets/wvlogo.svg";    // Placeholder import
import smjroLogo from "@/assets/smologo.svg"; // Placeholder import
import icepLogo from "@/assets/icep.png";  // Placeholder import

// Define the type for the venture object for better TypeScript support
interface Venture {
  name: string;
  role: string;
  logo: string; // Changed from icon: Component to logo: string
  description: string;
  color: "primary" | "accent" | "secondary";
  link: string; // Keep the link property
}


const Ventures = () => {
  // 2. UPDATE THE VENTURES ARRAY TO USE LOGO PATHS INSTEAD OF ICON COMPONENTS
  const ventures: Venture[] = [
    {
      name: "Womenful Voice",
      role: "CEO & Founder",
      logo: wvLogo, // Use imported image path
      description:
        "An initiative dedicated to empowering women and girls to advocate for themselves and address their own needs through quality education, training programs, and good health and well-being to achieve long-term positive outcomes.",
      color: "primary",
      // Placeholder link to be external
      link: "https://www.womenfulvoice.org", 
    },
    {
      name: "Global Women's Cultural Exchange",
      role: "Founder & Executive Director",
      logo: gwceLogo, // Use imported image path
      description:
        "A nonprofit organization focused on empowering and connecting women globally by fostering cultural awareness, appreciation, and meaningful dialogue. Highlighting unique experiences of women from different regions that transform into inspired action, understanding, and lasting change.",
      color: "accent",
      // Placeholder link to be external
      link: "https://www.globalwomenculturalexchange.org", 
    },
    {
      name: "SMJRO LLC / SMJRO SRL",
      role: "Founder & Manager",
      logo: smjroLogo, // Use imported image path
      description:
        "Strategic business ventures focused on sustainable development and creating economic opportunities in underserved communities.",
      color: "secondary",
      // Placeholder link to be external
      link: "https://www.adoras.holidayfuture.com", 
    },
    {
      name: "ICEP",
      role: "Executive Member & Manager",
      logo: icepLogo, // Use imported image path
      description:
        "Leading innovative programs that bridge cultural gaps and create pathways for professional and personal development.",
      color: "primary",
      // Placeholder link to be external
      link: "https://www.linkedin.com/company/international-commission-of-equity-peace-ipec/?lipi=urn%3Ali%3Apage%3Ad_flag-ship3_search_srp_all%3JH7O5iVaSIOZ-takZW7xdFA%3D%3D", 
    },
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/10 to-transparent py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={globalImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">The Vehicles for Change</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            My mission comes to life through these specific platforms. Each one is a branch of the same tree, dedicated
            to empowering women and fostering understanding across cultures.
          </p>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ventures.map((venture, index) => {
            // NOTE: Icon component removed, using venture.logo directly
            return (
              <Card
                key={index}
                className={`hover-lift border-2 border-${venture.color}/20 hover:border-${venture.color} transition-all duration-300 group`}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full bg-${venture.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-2`} 
                  >
                    {/* 3. RENDER THE LOGO IMAGE INSTEAD OF THE LUCIDE ICON */}
                    <img 
                      src={venture.logo} 
                      alt={`${venture.name} logo`} 
                      className="w-full h-full object-contain" // Use object-contain to ensure the logo fits without cropping
                    />
                  </div>
                  <CardTitle className="text-2xl font-serif">{venture.name}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{venture.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">{venture.description}</p>
                  {/* CORRECT IMPLEMENTATION: Wrap Button in <a> and use target="_blank" */}
                  <a href={venture.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Each venture represents an opportunity to create meaningful change. Let's explore how we can work
              together.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get in Touch
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Ventures;