import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Target, Users, Heart, Mountain, Home, Compass } from "lucide-react";
import plantingImage from "@/assets/planting-seeds.jpg";
import growthImage from "@/assets/amr.jpg";

const About = () => {
  return (
    <main className="pt-24 pb-20">
    {/* Header */}
    <section className="bg-gradient-to-b from-primary/10 to-transparent py-5">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">My Journey</h1>
            <h4 className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Rooted in Haiti, building a global impact
            </h4>
        </div>
    </section>

    {/* Combined Bio and Philosophy Text Section */}
    <section className="container mx-auto px-4 py-2 relative">
        {/* Background Blurs (Retained) */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl font-serif font-bold mb-4 text-center animate-fade-in-up">More Than My Titles</h2>
            <p className="text-2xl font-serif font-semibold text-center text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>My Mission</p>

            {/* Image Grid (Retained) */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
    <div className="animate-slide-in-left">
        <img 
            src={plantingImage} 
            alt="Planting seeds and nurturing growth" 
            className="rounded-2xl shadow-2xl w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
        />
    </div>
    <div className="animate-slide-in-right">
        <img 
            src={growthImage} 
            alt="Growth from the ground up" 
            className="rounded-2xl shadow-2xl w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
        />
    </div>
</div>

            {/* Combined Bio and Philosophy Content */}
            <div className="space-y-4 text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
                {/* --- Bio Content --- */}
                <h3 className="text-2xl font-serif font-semibold text-primary">The Beginning</h3>
                <p>
                    My story starts in Haiti, where I learned the profound resilience of community. As an Agricultural
                    Engineer, I didn't just learn how to make things grow; I learned the patience and principles required
                    to nurture life from a single seed, a philosophy I now apply to people and ventures.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-accent">The Pivot</h3>
                <p>
                    My MBA gave me the strategic tools, but my heart was always in empowerment. This led me to found
                    Womenful Voice, create the Global Women's Cultural Exchange, and manage ventures that create real
                    opportunity.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-secondary">The Heart</h3>
                <p>
                    Beyond my titles, I am a mother, a wife, and an avid adventurer. You'll find me recharging on a
                    mountain trail or in my garden. This balance is my strength; it reminds me that success is measured in
                    strong communities and a life well-lived.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-foreground">My Commitment</h3>
                <p>
                    This belief in deep work is why I limit my partnerships to one per service per year  Your success
                    deserves my full attention.
                </p>

                <div className="pt-10">
                  <h2 className="text-4xl font-serif font-bold text-center mb-4 pt-10 border-t border-border">My Philosophy</h2>
                  <p className="text-center text-muted-foreground mb-12 text-xl">
                      Guiding principles that shape everything I do
                  </p>
                </div>
                
                {/* --- Philosophy Content --- */}
                <h3 className="text-2xl font-serif font-semibold text-primary">My Vision</h3>
                <p className="text-muted-foreground">
                    A world where every passionate woman has the knowledge and support to lead her community and
                    enterprise to success.
                </p>
                
                <h3 className="text-2xl font-serif font-semibold text-accent">My Mission</h3>
                <p className="text-muted-foreground">
                    To provide the strategic foundation and ongoing mentorship that transforms raw passion into
                    sustainable, impactful action.
                </p>
                
                <h3 className="text-2xl font-serif font-semibold text-secondary">My Values</h3>
                <p className="text-muted-foreground">
                    Empowerment, Integrity, Cultural Pride, Strategic Action 
                </p>
                
                <h3 className="text-2xl font-serif font-semibold text-primary">My Approach</h3>
                <p className="text-muted-foreground">
                    Deep, focused partnerships that nurture growth from the ground up, one venture at a time.
                </p>
            </div>
        </div>
    </section>
</main>
  );
};

export default About;
