import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">JCF</span>
              </div>
              <span className="font-heading font-bold text-lg">Jessy Care Foundation</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering young people through education, vocational training, entrepreneurship, and community development in Ghana and beyond.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Who We Are", path: "/about/who-we-are" },
                { label: "Projects", path: "/projects" },
                { label: "Events", path: "/projects/events" },
                { label: "Gallery", path: "/projects/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Get Involved</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Donate", path: "/donate" },
                { label: "Volunteer", path: "/contact" },
                { label: "Partner With Us", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@jessycarefoundation.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +233 XX XXX XXXX
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +233 XX XXX XXXX
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-narrow px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {year} Jessy Care Foundation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
