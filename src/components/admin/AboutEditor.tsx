
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Mock about data
const initialAboutData = {
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
  ],
  contactHeading: "Get In Touch",
  contactInfo: "For more information about our platform and services, please visit our contact page."
};

const AboutEditor = () => {
  const [aboutData, setAboutData] = useState(initialAboutData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setAboutData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTeamMemberChange = (id: string, field: string, value: string) => {
    setAboutData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map(member => 
        member.id === id ? { ...member, [field]: value } : member
      )
    }));
  };

  const handleSave = () => {
    // In a real app, we would save the data to the server
    toast.success("About page content saved successfully!");
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-health-secondary">About Us Page Editor</h2>
        {isEditing ? (
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Content</Button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Page Header</h3>
          <div className="space-y-4">
            {isEditing ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <Input 
                    value={aboutData.title} 
                    onChange={(e) => handleInputChange('title', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                  <Input 
                    value={aboutData.subtitle} 
                    onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold">{aboutData.title}</h1>
                <p className="text-gray-600">{aboutData.subtitle}</p>
              </>
            )}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Mission Section</h3>
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
                <Input 
                  value={aboutData.mainHeading} 
                  onChange={(e) => handleInputChange('mainHeading', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <Textarea 
                  rows={6}
                  value={aboutData.mainContent} 
                  onChange={(e) => handleInputChange('mainContent', e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-2">{aboutData.mainHeading}</h3>
              <p className="text-gray-700 whitespace-pre-line">{aboutData.mainContent}</p>
            </>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Vision Section</h3>
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
                <Input 
                  value={aboutData.visionHeading} 
                  onChange={(e) => handleInputChange('visionHeading', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <Textarea 
                  rows={4}
                  value={aboutData.visionContent} 
                  onChange={(e) => handleInputChange('visionContent', e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-2">{aboutData.visionHeading}</h3>
              <p className="text-gray-700">{aboutData.visionContent}</p>
            </>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Team Section</h3>
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
                <Input 
                  value={aboutData.teamHeading} 
                  onChange={(e) => handleInputChange('teamHeading', e.target.value)}
                />
              </div>
              {aboutData.teamMembers.map((member) => (
                <div key={member.id} className="border rounded-md p-4 mb-4">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input 
                      value={member.name} 
                      onChange={(e) => handleTeamMemberChange(member.id, 'name', e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <Input 
                      value={member.role} 
                      onChange={(e) => handleTeamMemberChange(member.id, 'role', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <Textarea 
                      rows={3}
                      value={member.bio} 
                      onChange={(e) => handleTeamMemberChange(member.id, 'bio', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4">{aboutData.teamHeading}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aboutData.teamMembers.map((member) => (
                  <div key={member.id} className="border rounded-md p-4">
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-health-primary">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;
