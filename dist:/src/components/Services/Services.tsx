import { Building2, Briefcase, Users } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Architecture & Design",
    description: "Our award-winning team offers cutting-edge architectural designs, urban planning, and sustainable solutions. We specialize in creating spaces that are both aesthetically stunning and environmentally responsible."
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description: "From market analysis to operational improvements, we deliver comprehensive business growth strategies tailored to your goals. Our experts ensure every aspect of your business is optimized for success in today's competitive market."
  },
  {
    icon: Users,
    title: "Partnership Development",
    description: "Building strategic alliances is at the heart of our work. We connect you with global partners to unlock new opportunities, accelerate growth, and ensure sustainable collaboration for the future."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;