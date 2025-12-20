import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-1.jpg";
import team3 from "@/assets/team-1.jpg";

const teamMembers = [
  {
    name: "Rk. Jhon Doe",
    role: "Co-Founder & CEO",
    image: team1,
  },
  {
    name: "Sarah Smith",
    role: "Creative Director",
    image: team2,
  },
  {
    name: "Ak. Jhon Doe",
    role: "Lead Developer",
    image: team3,
  },
   {
    name: "Ak. Jhon Doe",
    role: "Lead Developer",
    image: team3,
  },
];

const Stats = () => {
  return (
    <section id="team" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet With Our Creative
            <br />
            <span className="text-primary">Dedicated Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of experts is here to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;


// const Stats = () => {
//   const stats = [
//     { value: "85%", label: "Reduction in MTTD" },
//     { value: "90%", label: "Faster MTTR" },
//     { value: "95%", label: "Autonomous Actions" },
//   ];

//   return (
//     <section className="relative border-y border-border/40 bg-card/50 backdrop-blur-sm">
//       <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-16 md:grid-cols-3">
//         {stats.map((stat, index) => (
//           <div key={index} className="text-center">
//             <div className="mb-2 text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-6xl">
//               {stat.value}
//             </div>
//             <div className="text-sm uppercase tracking-wider text-muted-foreground">
//               {stat.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Stats;
