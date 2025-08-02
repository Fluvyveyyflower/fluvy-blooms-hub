import { Heart, Phone, Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Phone,
      href: "https://wa.me/62882007938488",
      label: "WhatsApp"
    },
    {
      icon: Mail,
      href: "mailto:hello@fluvyveyyflowers.com",
      label: "Email"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/fluvyveyyflowers",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const categories = [
    "Wedding Flowers",
    "Birthday Bouquets",
    "Sympathy Arrangements",
    "Graduation Flowers",
    "Special Occasions"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">FluvyveyyFlowers</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Menciptakan momen indah dengan bunga segar dan rangkaian bunga elegan selama lebih dari satu dekade.
              Rekan tepercaya Anda untuk semua acara spesial dalam hidup.
            </p>
            <div className="flex items-center space-x-2 text-background/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Jl. Ahmad Yani,Gg. 2, Pesayangan, Kedungwuluh, Kec. Purwokerto Bar., Kabupaten Banyumas, Jawa Tengah 53152</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <span className="text-background/70 text-sm">{category}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="text-background/70 text-sm">
                <p>Mon-Sat: 9AM-8PM</p>
                <p>Sunday: 10AM-6PM</p>
              </div>
              <div className="text-background/70 text-sm">
                <p>+62 882-0079-38488</p>
                <p>hello@fluvyveyyflowers.com</p>
              </div>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-background/70 text-sm">
              <span>© {currentYear} FluvyveyyFlowers. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for flower lovers everywhere</span>
            </div>
            <div className="flex space-x-6 text-background/70 text-sm">
              <button className="hover:text-background transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-background transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-background transition-colors">
                Return Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;