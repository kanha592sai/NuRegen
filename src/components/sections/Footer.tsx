import { contactInfo, navLinks } from "@/data/content";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-heading text-xl font-bold mb-3">NuRegen</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Climate-tech enterprise driving regenerative innovation for a sustainable future.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            {contactInfo.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" /> {phone}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0" /> {contactInfo.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0" /> {contactInfo.address}
            </li>
          </ul>
        </div>


      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} NuRegen Private Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
