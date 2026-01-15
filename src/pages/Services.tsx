import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Rocket, Compass, FileText, Lightbulb, Mic } from "lucide-react";
import mentorshipImage from "@/assets/mentorship.jpg";
import speakingImage from "@/assets/speaking.jpg";
import globalImage from "@/assets/global-exchange.jpg";

const Services = () => {
  
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
     <section className="bg-gradient-to-b from-secondary/10 to-transparent py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={globalImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Strategic mentorship and resources to transform your vision into sustainable impact
          </p>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="container mx-auto px-4 py-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Mentorship</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">Build Your Vision with a Strategic Partner</p>

          <div className="mb-12 animate-fade-in-up">
            <img src={mentorshipImage} alt="Mentorship and strategic partnership" className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-accent/20 hover:border-accent hover-lift transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Heart className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="font-serif">The Nonprofit Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>For:</strong> Aspiring founders of NGOs and community organizations.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Includes:</strong> Strategic planning, business plan development, establishing
                  mission/vision/value propositions, guidance on legal structure (501(c)(3) etc.), and initial board
                  development strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary hover-lift transition-all duration-300">
              <CardHeader>
                <Rocket className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-serif">The Business Launchpad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>For:</strong> New entrepreneurs starting a business.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Includes:</strong> Comprehensive business plan creation, market analysis, financial modeling,
                  operational strategy, and brand positioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary hover-lift transition-all duration-300">
              <CardHeader>
                <Compass className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="font-serif">The Newcomer's Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>For:</strong> Individuals new to the US or Dominican Republic business/nonprofit landscape.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Includes:</strong> A combination of the above, tailored with essential cultural and regulatory
                  insights for navigating a new environment successfully.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Process Section */}
          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-serif font-bold mb-6">The Mentorship Process</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Application</h4>
                <p className="text-muted-foreground">Submit your vision via the contact form.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Discovery Call</h4>
                <p className="text-muted-foreground">
                  A conversation to ensure we are the right fit for a partnership.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Foundation Building</h4>
                <p className="text-muted-foreground">
                  An intensive initial phase creating your comprehensive strategic plan.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Year-Long Support</h4>
                <p className="text-muted-foreground">
                  Regular strategic check-ins, troubleshooting sessions, and ongoing guidance as you implement your plan
                  and grow.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6 text-muted-foreground">
              This is a significant investment in your future. Because each partnership is deeply personalized,
              investment details are discussed upon application. If you are committed to the work, I am committed to
              being your guide.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Apply for Mentorship
              </Button>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Speaking Engagements */}
      <section className="container bg-gradient-to-r from-primary/5 to-secondary/5 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <img src={speakingImage} alt="Speaking engagement and keynote presentations" className="rounded-2xl shadow-2xl w-full" />
          </div>
          <div className="text-center mb-12 animate-fade-in-up">
            <Mic className="w-16 h-16 text-secondary mx-auto mb-6 animate-pulse-slow" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Speaking Engagement</h2>
            <p className="text-xl text-muted-foreground">Share My Message of Empowerment and Strategic Growth</p>
          </div>

          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            I am available to bring my unique blend of strategic insight and heartfelt storytelling to your next event,
            conference, or corporate gathering. My keynotes are designed to inspire, educate, and equip audiences with
            actionable frameworks for growth.
          </p>

          <div className="space-y-8 mb-12">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">From Seed to Success</h3>
                <p className="text-sm text-muted-foreground">
                  Nurturing Growth in Business and Life. Drawing on my engineering background, this talk reveals how the
                  principles of nurturing a plant can be applied to building a resilient venture and fulfilling career.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">The Blueprint for Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Building a Sustainable Nonprofit from the Ground Up. A practical session for aspiring changemakers,
                  breaking down the essential components of a successful nonprofit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Global Sisterhood</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging Cultural Exchange to Drive Change. This talk explores how fostering understanding among
                  women from diverse backgrounds is a strategic imperative for solving global challenges.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Invite Senska to Speak
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;