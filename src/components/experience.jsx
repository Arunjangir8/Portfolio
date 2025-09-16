
const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Web Development',
      company: 'Commkraft',
      duration: 'May 2025 - Present',
      location: 'Remote',
      description: 'Working on various full-stack projects using React, Node.js, Remix and Express as well as worked on Shopify. Collaborated with team members to build scalable web applications and gained hands-on experience in modern development practices.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
    }
  ];

  return (
    <section id="experience-loc" className="min-h-screen w-screen p-5 md:p-24 bg-[#2a2b30]">
      <h1 className="text-4xl md:text-6xl font-bold text-[#fbfbfb] font-libre ">Experience</h1>
       <div className="h-0.5 md:w-[310px] bg-[#fec86a] md:mr-8 mb-12" />
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative bg-[#3d3e42] rounded-xl p-6 md:p-8 hover:bg-[#4a4b50] transition-all duration-300 border-l-4 border-[#fec86a]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#fbfbfb] mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-lg md:text-xl text-[#fec86a] font-medium mb-2">
                  {exp.company}
                </h4>
              </div>
              <div className="text-right">
                <p className="text-[#98999a] text-base md:text-lg mb-1">{exp.duration}</p>
                <p className="text-[#98999a] text-sm md:text-base">{exp.location}</p>
              </div>
            </div>

            <p className="text-[#fbfbfb] text-base md:text-lg leading-relaxed mb-4 font-serif">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[#fec86a] text-[#34353b] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Decorative timeline dot */}
            <div className="absolute -left-2 top-8 w-4 h-4 bg-[#fec86a] rounded-full shadow-lg"></div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Experience;