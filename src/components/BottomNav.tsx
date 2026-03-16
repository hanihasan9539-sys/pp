import { Link, useLocation } from "react-router-dom";
import { Home, Search, Grid3X3, Flame, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Grid3X3, label: "Categories", path: "/categories" },
  { icon: Flame, label: "Trending", path: "/trending" },
  { icon: ShoppingBag, label: "Cart", path: "/cart" },
];

const BottomNav = () => {
  const location = useLocation();
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-background/80 backdrop-blur-lg border-t border-border md:hidden">
      <div className="flex items-center justify-around h-full px-2 pb-safe">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
          const isCart = label === "Cart";

          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center justify-center gap-1 min-w-[48px] min-h-[48px] relative"
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isCart && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
