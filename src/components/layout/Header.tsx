import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", path: "/about/who-we-are" },
      { label: "What We Do", path: "/about/what-we-do" },
    ],
  },
  {
    label: "Our Projects",
    children: [
      { label: "Projects", path: "/projects" },
      { label: "Events", path: "/projects/events" },
      { label: "Gallery", path: "/projects/gallery" },
    ],
  },
  { label: "Donate", path: "/donate" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path?: string) => path && location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">JCI</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground hidden sm:block">
            The Jessicare Initiative
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                    "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-0 mt-1 w-52 bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200",
                    openDropdown === item.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={cn(
                        "block px-4 py-3 text-sm transition-colors",
                        isActive(child.path)
                          ? "text-primary bg-muted font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive(item.path)
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link to="/donate" className="hidden md:block">
            <Button variant="gradient" size="sm">Donate Now</Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-narrow px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground rounded-lg cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 text-sm font-medium rounded-lg",
                    isActive(item.path) ? "text-primary bg-muted" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/donate" onClick={() => setMobileOpen(false)}>
              <Button variant="gradient" className="w-full mt-3">Donate Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;