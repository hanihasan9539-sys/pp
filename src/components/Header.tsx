import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Sun, Moon } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/trending", label: "Trending" },
];

const Header = () => {
  const { items } = useCart();
  const location = useLocation();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // ── Theme toggle ──────────────────────────────────────────────
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-8">

        {/* Logo */}
        <Link to="/about" className="flex-shrink-0">
          <img src={logo} alt="PP Collections" className="h-11 sm:h-12 w-auto" />
        </Link>

        {/* Desktop nav — centered pill */}
        <nav className="hidden md:flex items-center bg-secondary rounded-full px-2 py-1.5 gap-1">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`
                  relative px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
                  ${active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1">

          {/* Search */}
          <Link
            to="/search"
            className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
          >
            <Search className="w-5 h-5" />
          </Link>

          {/* Dark / Light toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          

        </div>
      </div>
    </header>
  );
};

export default Header;