import { Card, CardContent } from "@/components/ui/card";
import { Heart, Truck, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Fresh & Quality",
      description: "Kami hanya mengambil bunga segar setiap hari dari petani lokal terpercaya untuk memastikan rangkaian bunga dengan kualitas terbaik."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Pengiriman di hari yang sama tersedia di seluruh kota. Kami memastikan bunga Anda tiba dalam keadaan segar dan tepat waktu untuk setiap kesempatan."
    },
    {
      icon: Shield,
      title: "Satisfaction Guarantee",
      description: "Kepuasan 100% terjamin. Jika Anda tidak sepenuhnya puas dengan pesanan Anda, kami akan memperbaikinya."
    },
    {
      icon: Users,
      title: "Expert Florists",
      description: "Tim florist kami yang berpengalaman menciptakan rangkaian bunga yang indah dan sesuai pesanan untuk setiap momen spesial dalam hidup Anda."
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
            Selama lebih dari satu dekade, kami telah menciptakan momen-momen ajaib dengan rangkaian bunga kami yang indah.
            Dari perayaan yang intim hingga acara-acara besar, kami menghadirkan keindahan dan kegembiraan di setiap kesempatan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                FluvyveyyFlowers berawal dari bisnis keluarga kecil dengan misi sederhana: menyebarkan
                kebahagiaan melalui keindahan alami bunga. Berawal dari sebuah studio kecil, FluvyveyyFlowers kini telah berkembang
                menjadi toko bunga lokal yang dicintai dan melayani ratusan pelanggan yang puas.
              </p>
              <p>
                Setiap rangkaian bunga yang kami ciptakan menceritakan sebuah kisah. Baik itu merayakan cinta,
                memperingati momen penting, atau memberikan penghiburan di masa sulit, kami percaya
                bunga memiliki kekuatan untuk berbicara ketika kata-kata tak mampu mengungkapkannya.
              </p>
              <p>
                Saat ini, kami terus menjunjung tinggi prinsip dasar kami, yaitu kualitas, kreativitas, 
                dan layanan pelanggan yang luar biasa, sembari memanfaatkan teknologi modern untuk melayani Anda dengan lebih baik.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-floral-mint to-floral-cream rounded-3xl p-8">
              <img
                src="https://images.weddingku.com/images/upload/articles/images/y17gwk3vvq8t72220191345.jpg?w=800"
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
            "Untuk menciptakan rangkaian bunga yang indah dan bermakna yang merayakan momen-momen istimewa dalam hidup
            dan membawa kebahagiaan bagi komunitas kami, satu buket pada satu waktu."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;