import VirtualMouse from "@/assets/Vitual Mouse.jpg";
import VirtualKeyboard from "@/assets/Virtual Keyboard.jpg";
import VirtualPainter from "@/assets/Virtual Painter.jpg";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const Features = () => {
  const keypoints1 = [
    "Smooth and accurate cursor control",
    "Gesture-based clicks and scrolling",
    "Ideal for presentations and smart classrooms",
    "Completely touch-free experience",
  ];
    const keypoints2 = [
    "Gesture-based typing and key selection",
    "Supports quick text input and commands",
    "Perfect for accessibility and teaching setups",
    "Lightweight, responsive, and intuitive",
  ];

  const keypoints3 = [
    "Real-time drawing using hand gestures",
    "Multiple brush colors and thickness options",
    "Perfect for diagrams, notes, and illustrations",
    "Seamless integration with virtual tools",
  ];

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Vision Header */}
        <div className="mb-24 text-center">
          <div className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
            The Vision
          </div>
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            BEYOND CLICKS
          </h2>
          <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            INTO MOTION
          </h2>
        </div>

        {/* Feature 1 */}
        <div className="mb-32 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm">
            <img 
              src={VirtualMouse} 
              alt="Security dashboard" 
              className="h-auto w-full"
            />
          </div>
          <div className="md:w-1/2 w-full">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Virtual Mouse
          </h3>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Our <span className="font-semibold text-foreground">Virtual Mouse</span> lets you control the cursor effortlessly through hand gestures — no physical device required. Perfect for classrooms, meetings, and live demos, it offers precise and responsive navigation from any distance.
          </p>
          <ul className="space-y-3 mb-8 mt-6">
              {keypoints1.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button 
          size="lg" 
          className="h-14 bg-primary px-8 text-base font-semibold shadow-[0_0_40px_hsl(263_70%_60%/0.5)] transition-shadow hover:shadow-[0_0_60px_hsl(263_70%_60%/0.7)]"
        >
          Learn More
        </Button>
          </div>
        </div>
        
        {/* Feature 2 */}
        <div className="mb-32 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm">
            <img 
              src={VirtualKeyboard} 
              alt="Security dashboard" 
              className="h-auto w-full"
            />
          </div>
          <div className="md:w-1/2 w-full">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Virtual Keyboard
          </h3>
          <p className="max-w-3xl text-lg text-muted-foreground">
            The <span className="font-semibold text-foreground">Virtual Keyboard</span> enables hands-free typing using finger or gesture recognition. It’s designed for speed, accessibility, and comfort — helping users interact naturally without touching any surface.
          </p>
          <ul className="space-y-3 mb-8 mt-6">
              {keypoints2.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button 
          size="lg" 
          className="h-14 bg-primary px-8 text-base font-semibold shadow-[0_0_40px_hsl(263_70%_60%/0.5)] transition-shadow hover:shadow-[0_0_60px_hsl(263_70%_60%/0.7)]"
        >
          Learn More
        </Button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="mb-32 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm">
            <img 
              src={VirtualPainter} 
              alt="Security dashboard" 
              className="h-auto w-full"
            />
          </div>
          <div className="md:w-1/2 w-full">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Virtual Painter
          </h3>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Our <span className="font-semibold text-foreground">Virtual Painter</span> transforms your hand into a digital brush. Draw, write, and sketch freely in mid-air — ideal for teachers explaining concepts or professionals illustrating ideas on screen
          </p>
          <ul className="space-y-3 mb-8 mt-6">
              {keypoints3.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button 
          size="lg" 
          className="h-14 bg-primary px-8 text-base font-semibold shadow-[0_0_40px_hsl(263_70%_60%/0.5)] transition-shadow hover:shadow-[0_0_60px_hsl(263_70%_60%/0.7)]"
        >
          Learn More
        </Button>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 p-12 text-center backdrop-blur-sm md:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(263_70%_60%/0.1)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              See Intelligence Come Alive
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Experience the future of autonomous security operations
            </p>
            <button className="rounded-lg bg-primary px-8 py-4 font-semibold shadow-[0_0_40px_hsl(263_70%_60%/0.5)] transition-all hover:shadow-[0_0_60px_hsl(263_70%_60%/0.7)]">
              Book a Demo
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Features;
