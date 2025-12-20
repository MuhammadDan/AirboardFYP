import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="text-xl font-bold">Airboard</span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="#platform" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Platform
          </a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#solutions" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Team
          </a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </div>

        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
          Request Demo
        </Button>
      </nav>
    </header>
  );
};

export default Header;
