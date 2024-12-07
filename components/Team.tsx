const team = [
  {
    name: "Mark McNamara",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    bio: "With over 20 years of construction experience, Mark leads W5 Contractors with expertise and vision."
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "Sarah brings 15 years of project management excellence to our commercial projects."
  },
  {
    name: "Mike Chen",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    bio: "Mike's innovative designs have won multiple awards in sustainable architecture."
  },
  {
    name: "David Rodriguez",
    role: "Safety Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "David ensures all projects maintain the highest safety standards in the industry."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet the experts behind W5 Contractors
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-600 font-medium mt-1">{member.role}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}