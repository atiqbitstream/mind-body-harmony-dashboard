import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Heart, Brain, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  // Sample data for preview sections
  const aboutPreview = {
    title: "About W.O.M.B",
    subtitle: "Wellness Optimal Mind Body", 
    description: "We are dedicated to revolutionizing healthcare through cutting-edge wellness technology. Our platform bridges the gap between innovative therapeutic treatments and healthcare professionals.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  };

  const newsPreview = [
    {
      id: "1",
      title: "New Therapeutic Technology Breakthrough",
      summary: "Revolutionary LED-based approach to burn therapy showing promising results.",
      image: "https://picsum.photos/id/237/400/200",
      date: "2023-09-15"
    },
    {
      id: "2", 
      title: "Healthcare Innovation Award Winner",
      summary: "W.O.M.B platform recognized for excellence in remote therapeutic care.",
      image: "https://picsum.photos/id/238/400/200",
      date: "2023-08-28"
    }
  ];

  const liveSessionPreview = {
    nextSession: {
      title: "Mind-Body Wellness Techniques",
      host: "Dr. Sarah Johnson",
      date: new Date(Date.now() + 86400000), // Tomorrow
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    pastCount: 12
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--health-primary))]/10 via-background to-[hsl(var(--health-primary))]/5">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--health-primary))] mb-6">
              W.O.M.B
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Wellness Optimal Mind Body
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionizing healthcare through innovative technology and expert therapeutic care. 
              Experience the future of wellness management today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--health-primary))] mb-4 flex items-center justify-center">
              <Heart className="mr-3 h-8 w-8" />
              About Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how we're transforming healthcare delivery through innovation
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                {aboutPreview.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutPreview.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-[hsl(var(--health-primary))]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[hsl(var(--health-primary))]">500+</div>
                  <div className="text-sm text-muted-foreground">Patients Helped</div>
                </div>
                <div className="p-4 bg-[hsl(var(--health-primary))]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[hsl(var(--health-primary))]">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={aboutPreview.heroImage} 
                  alt="Healthcare Technology" 
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--health-primary))] mb-4 flex items-center justify-center">
              <Brain className="mr-3 h-8 w-8" />
              Latest News & Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about breakthrough developments in therapeutic care
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsPreview.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {news.summary}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {new Date(news.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to read more and stay updated?
            </p>
            <Button variant="outline" asChild>
              <Link to="/signup">Join Now for Full Access</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live Session Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--health-primary))] mb-4 flex items-center justify-center">
              <Calendar className="mr-3 h-8 w-8" />
              Live Sessions & Training
            </h2>
            <p className="text-lg text-muted-foreground">
              Join expert-led sessions and expand your knowledge
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-r from-[hsl(var(--health-primary))]/5 to-[hsl(var(--health-primary))]/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Next Live Session
                    </h3>
                    <h4 className="text-xl font-medium text-[hsl(var(--health-primary))] mb-2">
                      {liveSessionPreview.nextSession.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Hosted by {liveSessionPreview.nextSession.host}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <Calendar className="mr-2 h-4 w-4" />
                      {liveSessionPreview.nextSession.date.toLocaleDateString()} at{" "}
                      {liveSessionPreview.nextSession.date.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Past Sessions Available:</span>
                        <span className="font-medium">{liveSessionPreview.pastCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Duration:</span>
                        <span className="font-medium">45-60 minutes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={liveSessionPreview.nextSession.thumbnail} 
                      alt="Live Session" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                      <div className="bg-white/90 p-4 rounded-full">
                        <Play className="h-8 w-8 text-[hsl(var(--health-primary))]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Access live sessions and our complete library
                  </p>
                  <Button asChild>
                    <Link to="/signup">Sign Up to Join Sessions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--health-primary))]/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--health-primary))] mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust W.O.M.B for their therapeutic and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/signup">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/login">Already Have an Account?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;