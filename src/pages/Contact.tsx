import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    source: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      source: "",
      service: "",
      message: "",
    });
  };

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-accent/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">Let's Start a Conversation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            I welcome inquiries about my mentorship services and potential collaborations.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-slide-in-left hover-lift">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <Label htmlFor="source">How did you hear about me?</Label>
                  <Input
                    id="source"
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <Label htmlFor="service">What service are you interested in? *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nonprofit">Nonprofit Mentorship</SelectItem>
                      <SelectItem value="business">Business Mentorship</SelectItem>
                      <SelectItem value="newcomer">Newcomer Mentorship</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="speaking">Speaking Engagement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please briefly describe your goals and vision"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground italic">
                  I welcome serious inquiries about my mentorship services and meaningful collaboration opportunities.
                  Please note that due to my limited capacity, I may not be able to respond to all inquiries, but I
                  appreciate your message.
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm italic text-muted-foreground mb-2">I'm looking forward to reading your story,</p>
                <p className="font-serif text-lg">- Senska</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="p-8">
                <Mail className="w-10 h-10 text-primary mb-4 animate-bounce-subtle" />
                <h3 className="text-xl font-serif font-semibold mb-2">Email</h3>
                <a
                  href="mailto:self@senska.onmy.cloud"
                  className="text-primary hover:underline"
                >
                  self@senska.onmy.cloud
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-semibold mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-0 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-semibold mb-4">Office Hours</h3>
                <p className="text-muted-foreground mb-2">
                  I typically respond to inquiries within 1-2 business days.
                </p>
                <p className="text-muted-foreground">
                  For speaking engagements and urgent matters, please mention that in your message subject.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
