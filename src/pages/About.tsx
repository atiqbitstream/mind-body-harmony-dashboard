
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const About = () => {
  const [aboutData, setAboutData] = useState({
    title: "About W.O.M.B",
    subtitle: "Wellness Optimal Mind Body",
    mainHeading: "Our Mission",
    mainContent: `At W.O.M.B (Wellness Optimal Mind Body), we are dedicated to revolutionizing the way healthcare professionals deliver therapeutic treatments. Our platform bridges the gap between cutting-edge wellness technology and healthcare providers, creating seamless integrations that improve patient outcomes.

Founded in 2020, our team of medical professionals and technology experts has developed a comprehensive system for monitoring and controlling therapeutic devices remotely, allowing for more precise and personalized treatment plans.`,
    visionHeading: "Our Vision",
    visionContent: "We envision a future where healthcare professionals can provide optimal care without limitations of physical presence, where therapeutic devices work in harmony to create personalized healing environments, and where patients receive the highest standard of care through technological innovation.",
    teamHeading: "Our Team",
    teamMembers: [
      {
        id: "1",
        name: "Dr. Sarah Johnson",
        role: "Chief Medical Officer",
        bio: "Dr. Johnson has over 15 years of experience in rehabilitation medicine and leads our medical research initiatives."
      },
      {
        id: "2",
        name: "Michael Chen",
        role: "Chief Technology Officer",
        bio: "Michael brings 20 years of expertise in IoT and healthcare technology integration."
      },
      {
        id: "3",
        name: "Lisa Rodriguez",
        role: "Head of Product Development",
        bio: "Lisa specializes in creating intuitive healthcare interfaces and workflow optimization."
      }
    ]
  });

  // This would be an API call in a real app
  useEffect(() => {
    // Simulate loading data
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-health-secondary mb-2">{aboutData.title}</h1>
          <p className="text-xl text-foreground/80">{aboutData.subtitle}</p>
        </header>

        <div className="max-w-3xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-health-primary mb-4">{aboutData.mainHeading}</h2>
            <div className="prose max-w-none text-foreground/80">
              <p className="whitespace-pre-line">{aboutData.mainContent}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-health-primary mb-4">{aboutData.visionHeading}</h2>
            <div className="prose max-w-none text-foreground/80">
              <p>{aboutData.visionContent}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-health-primary mb-6">{aboutData.teamHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutData.teamMembers.map((member) => (
                <div key={member.id} className="bg-card text-card-foreground rounded-lg shadow p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-health-primary text-sm mb-2">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
