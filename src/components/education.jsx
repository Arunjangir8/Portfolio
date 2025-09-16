const Education = () => {
  const educationData = [
    {
      title: 'Student',
      institution: 'Newton School Of Technology',
      duration: '2023 - Present',
      location: 'Sonipat, India',
      description: `As a 2nd-year student at the Newton School of Technology, I embarked on an exciting journey into the world of technology and computer science. 
      The initial months were filled with learning, exploration, and personal growth, laying a solid foundation for my future studies.

      My first year introduced me to essential subjects such as programming fundamentals, web development, and introductory data structures. 
      I learned the basics of languages like Python, NodeJS, ExpressJS, ReactJS, and NextJS, which sparked my interest in coding and web design. 
      The hands-on assignments allowed me to apply theoretical concepts and see immediate results, reinforcing my understanding.`,
      technologies: ['Python', 'Node.js', 'Express.js', 'React', 'Next.js']
    },
    {
      title: 'High School Student',
      institution: 'Kendriya Vidyalaya SPG',
      duration: '2010 - 2023',
      location: 'New Delhi, India',
      description: `Academically, I was challenged to think critically and explore various subjects. The emphasis on holistic learning helped me develop 
      a strong foundation in both science and humanities. I learned to approach problems analytically, and the encouragement to participate 
      in projects and presentations boosted my confidence.

      Kendriya Vidyalaya instilled in me strong values like respect, integrity, and perseverance. Interacting with classmates from diverse 
      backgrounds enhanced my social skills and cultural awareness. I learned to appreciate different perspectives and fostered lasting friendships.`,
      technologies: ['Science', 'Projects', 'Teamwork']
    }
  ];

  return (
    <section id="education-loc" className="min-h-screen w-screen p-5 md:p-24 bg-[#2a2b30]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre">Education</h1>
      <div className="h-0.5 md:w-[220px] bg-[#fec86a] md:mr-8 mb-12" />
      <div className="flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative bg-[#3d3e42] rounded-xl p-6 md:p-8 hover:bg-[#4a4b50] transition-all duration-300 border-l-4 border-[#fec86a]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#fbfbfb] mb-1">
                  {edu.title}
                </h3>
                <h4 className="text-lg md:text-xl text-[#fec86a] font-medium mb-2">
                  {edu.institution}
                </h4>
              </div>
              <div className="text-right">
                <p className="text-[#98999a] text-base md:text-lg mb-1">{edu.duration}</p>
                <p className="text-[#98999a] text-sm md:text-base">{edu.location}</p>
              </div>
            </div>

            <p className="text-[#fbfbfb] text-lg font-serif md:text-lg leading-relaxed mb-4 whitespace-pre-line">
              {edu.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {edu.technologies.map((tech, techIndex) => (
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
};

export default Education;
