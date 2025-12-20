import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Radial gradient glow */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(263_70%_60%/0.15)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-start justify-center px-6 pt-24">
        <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          AI-Native Security Platform
        </div>
        
        <h1 className="mb-6 max-w-4xl text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          WORLD'S FIRST{" "}
          <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            AIRBOARD
          </span>{" "}
          
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Our innovative gesture-controlled application empowers users to operate their computer seamlessly from a distance using intuitive hand movements.
          Whether you’re teaching in a classroom, delivering a presentation in a meeting, or showcasing a project on stage, the integrated Virtual Mouse, Keyboard, and Painter provide a smooth, contactless, and intelligent interaction experience.
        </p>

        <Button 
          size="lg" 
          className="h-14 bg-primary px-8 text-base font-semibold shadow-[0_0_40px_hsl(263_70%_60%/0.5)] transition-shadow hover:shadow-[0_0_60px_hsl(263_70%_60%/0.7)]"
        >
          Get A Demo
        </Button>
      </div>
    </section>
  );
};

export default Hero;
