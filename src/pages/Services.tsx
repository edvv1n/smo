import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Heart, Rocket, Compass, FileText, Lightbulb, Mic, CheckCircle2, Globe, Users } from "lucide-react";
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
            conference, or corporate gathering.
          </p>

          <div className="space-y-8 mb-12">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">From Seed to Success</h3>
                <p className="text-sm text-muted-foreground">
                  Nurturing Growth in Business and Life using engineering principles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">The Blueprint for Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Building a Sustainable Nonprofit from the Ground Up.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Global Sisterhood</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging Cultural Exchange to Drive Change.
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

      {/* Nonprofit Packages Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Nonprofit Packages</h2>
            <p className="text-muted-foreground">Comprehensive solutions tailored to your organization's budget and scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Full Launch Package */}
            <Card className="flex flex-col border-2 border-primary/20 hover:border-primary transition-all duration-300">
              <CardHeader>
                <Rocket className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="font-serif text-xl">Full Launch Package</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 501(c)(3) + Bylaws</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> State Registration</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 3 UN Passes (2 Years)</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Charter + Project Plan</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Board & Budget Docs</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start bg-muted/30 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pricing</p>
                <p className="text-sm">Budget &lt;$50k: <strong>$1,000</strong></p>
                <p className="text-sm">Budget $50k+: <strong>$2,500</strong></p>
              </CardFooter>
            </Card>

            {/* Org Status Pro */}
            <Card className="flex flex-col border-2 border-accent/20 hover:border-accent transition-all duration-300">
              <CardHeader>
                <Globe className="w-10 h-10 text-accent mb-2" />
                <CardTitle className="font-serif text-xl">Org Status Pro</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> Complete Determination</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> Bylaws & Articles</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> State Charity Reg</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> 3 UN Event Passes</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start bg-muted/30 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pricing</p>
                <p className="text-sm">Budget &lt;$50k: <strong>$750</strong></p>
                <p className="text-sm">Budget $50k+: <strong>$1,500</strong></p>
              </CardFooter>
            </Card>

            {/* Program Builder */}
            <Card className="flex flex-col border-2 border-secondary/20 hover:border-secondary transition-all duration-300">
              <CardHeader>
                <FileText className="w-10 h-10 text-secondary mb-2" />
                <CardTitle className="font-serif text-xl">Program Builder</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> Project Charter</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> Detailed Plan (15 pgs)</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> Budget Template</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> 3 Rounds of Revisions</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start bg-muted/30 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pricing</p>
                <p className="text-sm">Budget &lt;$50k: <strong>$750</strong></p>
                <p className="text-sm">Budget $50k+: <strong>$1,500</strong></p>
              </CardFooter>
            </Card>

            {/* Board Builder */}
            <Card className="flex flex-col border-2 border-primary/20 hover:border-primary transition-all duration-300">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="font-serif text-xl">Board Builder</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 12mo Governance Coach</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Recruitment Strategy</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Orientation Materials</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Quarterly Check-ins</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start bg-muted/30 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pricing</p>
                <p className="text-sm">Flat Rate: <strong>$2,000</strong></p>
                <p className="text-xs italic text-muted-foreground">Any budget size</p>
              </CardFooter>
            </Card>
          </div>

          {/* Key Points Note */}
          <div className="bg-muted/30 rounded-xl p-6 border border-border">
            <h4 className="font-serif font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent" /> Key Information
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Budget tiers refer to projected annual revenue for the upcoming fiscal year.</li>
                <li><strong>100% Approval Guarantee:</strong> If not approved, we revise or refund the fee.</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>UN passes provided via partnership with <strong>Diplomacy Org</strong>.</li>
                <li>All packages include digital delivery and dedicated management.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* À La Carte Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold mb-2">Individual Services</h2>
            <p className="text-muted-foreground">Specific solutions for targeted needs.</p>
          </div>
          <div className="bg-background rounded-lg shadow-sm border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[70%]">Service</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>501(c)(3) application + Bylaws</TableCell>
                  <TableCell className="text-right font-semibold">$500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State charity registration + Articles of Incorporation</TableCell>
                  <TableCell className="text-right font-semibold">$300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ECOSOC Application</TableCell>
                  <TableCell className="text-right font-semibold">$300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3 UN event passes for 2 years</TableCell>
                  <TableCell className="text-right font-semibold">$300</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>



    </main>
  );
};

export default Services;