import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Award, Globe, Sparkles, Users, Target, TrendingUp, Leaf, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-senska.jpg";
import growthImage from "@/assets/growth-garden.jpg";
import collaborationImage from "@/assets/collaboration.jpg";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(47, 47, 47, 0.6), rgba(47, 47, 47, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Nurturing Visionary Leaders
            <br />
            and Sustainable Ventures
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">Engineer. Executive. Mentor. Founder.</p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            I bridge the gap between solid strategy and heartfelt solidarity to help passionate women build ventures
            that last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button variant="hero" size="lg">
                Learn My Story
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                Explore My Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <img 
                src={growthImage} 
                alt="Growth and nurturing from the ground up" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="animate-slide-in-right">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">My Approach</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                From Raw Passion to Sustainable Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe true change happens at the intersection of strategy and soul. With a background in
                agricultural engineering and executive management, I don't just build plans; I nurture growth from the
                ground up.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My mission is focused: each year, I partner with one selected individual for mentorship, help
                build one sustainable business, and launch one impactful nonprofit. This allows me to offer the deep,
                focused attention your vision deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Reel */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 animate-fade-in-up">
            Highlight Reel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover-lift border-2 border-primary/20 hover:border-primary transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">MBA</h3>
                <p className="text-sm text-muted-foreground">Executive Management</p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-accent/20 hover:border-accent transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
                <p className="text-sm text-muted-foreground">Gender & Africana Studies</p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-secondary/20 hover:border-secondary transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Honoree</h3>
                <p className="text-sm text-muted-foreground">Women Who Inspire 2023</p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-primary/20 hover:border-primary transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">UN Delegate</h3>
                <p className="text-sm text-muted-foreground">2025 Human Rights Summit</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={collaborationImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-accent animate-pulse-slow" />
              <span className="text-sm font-semibold text-accent">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Their Success is My Story
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-l-4 border-l-primary hover-lift bg-background/80 backdrop-blur-sm animate-slide-in-left">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-primary" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-foreground leading-relaxed">
                  "Senska's mentorship was a game-changer. Her ability to create a clear business plan gave our
                  nonprofit a direction we lacked. Her year of support was invaluable."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Nonprofit Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover-lift bg-background/80 backdrop-blur-sm animate-slide-in-right">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-accent" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-foreground leading-relaxed">
                  "As a newcomer, the business landscape was daunting. Senska provided not just strategy, but cultural
                  insight and unwavering support. I couldn't have launched without her."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Maria R.</p>
                    <p className="text-sm text-muted-foreground">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-scale-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-semibold">Transform Your Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Build Something Meaningful?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              My capacity for deep, transformative work is intentionally limited. If you are ready to move from idea to
              impactful action, let's begin the conversation.
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Let's Work Together
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
