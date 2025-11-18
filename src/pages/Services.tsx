import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Rocket, Compass, FileText, Lightbulb, Mic } from "lucide-react";
import { loadStripe, Stripe } from '@stripe/stripe-js';
import mentorshipImage from "@/assets/mentorship.jpg";
import speakingImage from "@/assets/speaking.jpg";

// --- Stripe Setup ---
// FIX: Use import.meta.env instead of process.env for client-side code in Vite projects.
// Ensure your key in the .env file is named VITE_STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string);

// Placeholder Price IDs - REPLACE with your actual IDs from the Stripe Dashboard
const PRICE_ID_BUSINESS_PLAN = 'price_1P3c...your_business_price_id';
const PRICE_ID_STRATEGIC_PLAN = 'price_1P3d...your_strategic_price_id';

const Services = () => {

  // Checkout Handler Function
  const handleCheckout = async (priceId: string) => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe.js failed to load.");
      return;
    }

    // TS FIX: Assert the type to 'any' for redirectToCheckout method
    const checkoutStripe = stripe as any; 

    // API Call: Targets the Next.js backend running on localhost:3000
    const apiUrl = 'http://localhost:3000/api/create-checkout-session'; 
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId: priceId }), 
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: "Unknown error or invalid JSON response." }));
            console.error("Backend error creating session:", response.status, errorData.error);
            alert(`Could not start checkout. Status: ${response.status}`);
            return;
        }

        const { sessionId, error } = await response.json();
        
        if (error || !sessionId) {
             console.error("Backend returned logic error or missing sessionId:", error);
             alert("Error during session creation: " + (error || "Missing session ID."));
             return;
        }

        // Redirect to Stripe Checkout
        const result = await checkoutStripe.redirectToCheckout({
            sessionId: sessionId,
        });

        if (result.error) {
            console.error(result.error.message);
            alert("Error redirecting to checkout: " + result.error.message);
        }
    } catch (networkError) {
        console.error("Network or Fetch Error:", networkError);
        alert("Cannot reach the backend server (http://localhost:3000). Ensure it is running.");
    }
  };
  
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-accent/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

      {/* Resources Section - Payment Integration */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Resources</h2>
            <p className="text-xl text-center text-muted-foreground mb-8">Foundational Tools for Your Journey</p>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              I believe in empowering as many change-makers as possible. While my one-on-one mentorship is limited, I
              have created these foundational templates so you can start building your vision today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Product 1: The Business Plan Blueprint Template */}
              <Card className="hover-lift">
                <CardHeader>
                  <FileText className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="font-serif">The Business Plan Blueprint Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">
                    A comprehensive, fill-in-the-blank template designed to guide you through every critical component
                    of a business plan: Executive Summary, Market Analysis, Company Description, Organization &
                    Management, Marketing & Sales Strategy, Service/Product Line, and Financial Projections.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$99.99</span>
                    {/* Attach handler to button for Product 1 */}
                    <Button 
                      variant="default" 
                      onClick={() => handleCheckout(PRICE_ID_BUSINESS_PLAN)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Product 2: The Strategic Plan Framework Template */}
              <Card className="hover-lift">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 text-accent mb-4" />
                  <CardTitle className="font-serif">The Strategic Plan Framework Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">
                    A step-by-step workbook to help you define your organization's mission, vision, values, SWOT
                    analysis, long-term goals, and actionable objectives. Perfect for both new nonprofits and businesses
                    setting their strategic direction.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">$60.99</span>
                    {/* Attach handler to button for Product 2 */}
                    <Button 
                      variant="accent"
                      onClick={() => handleCheckout(PRICE_ID_STRATEGIC_PLAN)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-center text-muted-foreground italic">
              These templates are self-guided tools and are not a substitute for personalized advice. They provide a
              structured framework to organize your ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="container mx-auto px-4 py-20">
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