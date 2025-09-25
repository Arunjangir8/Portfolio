// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'Food delivery application',
      image: '/assets/food.jpg',
      description: 'I built a full-stack food delivery platform using React, Node.js, Express.js, PostgreSQL, and Prisma ORM. It features dual authentication for customers and restaurants, real-time order tracking, a smart cart with favorites, multiple addresses, and a restaurant dashboard. The mobile-first UI was designed with Tailwind CSS and Ant Design, integrated with Cloudinary for image handling. Security includes JWT, bcryptjs password hashing, OTP-based email verification, and Razorpay for payments.',
      link: 'https://github.com/Arunjangir8/food',
      hostedlink: 'https://newfoodie.netlify.app'
    },
    {
      title: 'School Management System',
      image: '/assets/schoolmanage.jpg',
      description: 'A comprehensive and modern School Management System built with Next.js 14, TypeScript, Tailwind CSS, Clerk Authentication, and Prisma ORM. This full-stack application provides role-based dashboards and streamlined school operations management for administrators, teachers, students, and parents..',
      link: 'https://github.com/Arunjangir8/School_management_system',
      hostedlink: 'https://school-management-system-4h4j.onrender.com/'
    },
    {
      title: 'Chat Application',
      image: '/assets/chat.jpg',
      description: 'This project is a modern real-time chat application built with React, Node.js, Express, Socket.IO, and Prisma ORM. It features text, image, and voice-to-text messaging with a responsive Ant Design interface. Users can chat in groups or direct messages, share images with previews, and convert speech to text seamlessly. Prisma ensures efficient and reliable database operations, while Socket.IO powers instant communication, presence, and typing indicators, delivering a fast, secure, and engaging chat experience.',
      link: 'https://github.com/Arunjangir8/meChat',
      hostedlink: 'https://me-chat-theta.vercel.app/'
    }
  ];

  return (
    <section id="portfolio-loc" className="flex flex-col items-center justify-center p-5 md:p-12 lg:p-24">
      <h1 className="text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-[100px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-3 border-[#fec86a] relative h-[80vw] w-[80vw] sm:h-[80vw] sm:w-[80vw] md:h-[45vw] md:w-[45vw] lg:h-[30vw] lg:w-[30vw] bg-[#3d3e42] rounded-2xl overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="relative h-full w-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 h-full w-full bg-[#34353ba2] items-center justify-center p-6 opacity-0 transition duration-500 hover:opacity-100">
              <h3 className="text-[#fbfbfb] text-2xl">{project.title}</h3>
              <p className="text-[#fbfbfb] text-base text-center overflow-y-auto max-h-40">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="h-9 w-28 bg-[#fec86a] border border-[#fec86a] rounded-lg text-[#34353b] text-sm transition duration-500 cursor-pointer">
                    GitHub
                  </button>
                </a>
                <a href={project.hostedlink} target="_blank" rel="noopener noreferrer">
                  <button className="h-9 w-28 bg-transparent border border-[#fec86a] rounded-lg text-[#fec86a] text-sm transition duration-500 cursor-pointer hover:bg-[#fec86a] hover:text-[#34353b]">
                    Live Site
                  </button>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;