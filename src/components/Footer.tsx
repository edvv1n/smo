import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"; // Removed Twitter import
import Logo from "@/assets/smo_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img className="h-20 mt-2 mb-2 w-auto max-h-full" src={Logo} alt="Logo" />
            <p className="text-background/80">
              Engineer. Executive. Mentor. Founder.
            </p>
            <p className="text-background/80 mb-4">
              Nurturing visionary leaders and sustainable ventures.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/women-empowerment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a> */}
              <a
                href="https://instagram.com/smjean.women"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 100 100" 
                  fill="currentColor"
                >
                  <text 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    fontFamily="sans-serif" 
                    fontSize="90" 
                    fontWeight="bold"
                  >
                    𝕏
                  </text>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-background/80 hover:text-primary transition-colors">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-background/80 mb-4 text-sm">Subscribe to receive insights on growth and empowerment.</p>
            <a
              href="mailto:self@senska.onmy.cloud"
              className="inline-flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-sm"
            >
              <Mail size={16} />
              self@senska.onmy.cloud
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">© {currentYear} Senska Jean O'Donnell. All Rights Reserved.</p>
          <Link to="/privacy" className="text-background/60 hover:text-primary transition-colors text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;