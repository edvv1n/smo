import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Instagram, Clock } from "lucide-react";

// --- CONFIGURATION ---
const WP_CF7_BASE = 'https://senska.onmy.cloud/wp-json/contact-form-7/v1';
const CONTACT_FORM_ID = '2591';
// ---------------------

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle'); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setStatus('idle');
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    
    const body = new FormData();
    body.append("your-name", formData.name);
    body.append("your-email", formData.email);
    body.append("your-company", formData.company);
    body.append("your-source", formData.source);
    body.append("your-service", formData.service);
    body.append("your-message", formData.message);

    body.append("_wpcf7_unit_tag", `wpcf7-f${CONTACT_FORM_ID}-o1`);

    try {
      const response = await fetch(`${WP_CF7_BASE}/contact-forms/${CONTACT_FORM_ID}/feedback`, {
        method: 'POST',
        body: body,
        // Adding this header can sometimes help WordPress identify the request type
        headers: {
          'Accept': 'application/json',
        },
      });

      const result = await response.json();

      if (result.status === 'mail_sent') {
        setStatus('success');
        toast({
          title: "Message Sent! 📬",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", company: "", source: "", service: "", message: "" });
      } else if (result.status === 'validation_failed') {
        setStatus('error');
        toast({
          title: "Check your fields ✍️",
          description: "Some information appears to be missing or invalid.",
          variant: "destructive",
        });
      } else {
        // This captures the 403 Forbidden or other server errors
        setStatus('error');
        toast({
          title: "Submission Error",
          description: result.message || "The server rejected the submission.",
          variant: "destructive",
        });
      }
    } catch (err) {
      setStatus('error');
      toast({
        title: "Network Error ⚠️",
        description: "Could not connect to the mail server.",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="pt-24 pb-20">
      <section className="bg-gradient-to-b from-accent/10 to-transparent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Let's Start a Conversation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I welcome inquiries about my mentorship services and potential collaborations.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="hover-lift border-primary/5">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company/Organization Name</Label>
                  <Input id="company" value={formData.company} onChange={handleChange} placeholder="Optional" />
                </div>
                <div>
                  <Label htmlFor="source">How did you hear about me?</Label>
                  <Input id="source" value={formData.source} onChange={handleChange} placeholder="Optional" />
                </div>
                <div>
                  <Label htmlFor="service">What service are you interested in? *</Label>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="speaking">Speaking Engagement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Please briefly describe your goals and vision" />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full py-6 text-lg transition-all active:scale-95" 
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                       <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                       Sending...
                    </span>
                  ) : 'Send Message'}
                </Button>
                <p className="text-xs text-muted-foreground italic">
                  I welcome serious inquiries about my mentorship services and meaningful collaboration opportunities.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-2 border-primary/20 hover-lift transition-all">
              <CardContent className="p-8">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2">Email</h3>
                <a href="mailto:self@senska.onmy.cloud" className="text-primary hover:underline font-medium">self@senska.onmy.cloud</a>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover-lift transition-all">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-semibold mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/women-empowerment" },
                    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/smjean.women" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                  <a href="https://twitter.com/home" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110">
                    <span className="font-bold">𝕏</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-inner">
              <CardContent className="p-8">
                <Clock className="w-10 h-10 text-accent mb-4 opacity-70" />
                <h3 className="text-xl font-serif font-semibold mb-4">Response Time</h3>
                <p className="text-muted-foreground">I typically respond to serious inquiries within 1-2 business days. Thank you for your patience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;