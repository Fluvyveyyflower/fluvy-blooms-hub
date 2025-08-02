import { Card, CardContent } from "@/components/ui/card";
import { Heart, Truck, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Fresh & Quality",
      description: "We source only the freshest flowers daily from trusted local growers to ensure the highest quality arrangements."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available across the city. We ensure your flowers arrive fresh and on time for every occasion."
    },
    {
      icon: Shield,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guaranteed. If you're not completely happy with your order, we'll make it right."
    },
    {
      icon: Users,
      title: "Expert Florists",
      description: "Our team of experienced florists create beautiful, custom arrangements for every special moment in your life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-floral-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About FluvyveyyFlowers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been creating magical moments with our exquisite flower arrangements. 
            From intimate celebrations to grand events, we bring beauty and joy to every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                FluvyveyyFlowers began as a small family business with a simple mission: to spread 
                joy through the natural beauty of flowers. What started in a small studio has grown 
                into a beloved local flower shop serving hundreds of happy customers.
              </p>
              <p>
                Every arrangement we create tells a story. Whether it's celebrating love, 
                commemorating milestones, or offering comfort during difficult times, we believe 
                flowers have the power to speak when words fall short.
              </p>
              <p>
                Today, we continue to honor our founding principles of quality, creativity, and 
                exceptional customer service while embracing modern technology to serve you better.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-floral-mint to-floral-cream rounded-3xl p-8">
              <img
                src="https://images.unsplash.com/photo-1488048924544-c818a467dacd?w=500"
                alt="Florist at work"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-white/50 rounded-3xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "To create beautiful, meaningful flower arrangements that celebrate life's special moments 
            and bring happiness to our community, one bouquet at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;