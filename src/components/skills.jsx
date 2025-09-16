// Skills Component
const Skills = () => {
  const skillsList = [
    { name: 'Python', icon: '/assets/python.svg' },
    { name: 'React', icon: '/assets/react.svg' },
    { name: 'Next', icon: '/assets/nextjs.svg' },
    { name: 'Remix', icon: '/assets/remix.svg' },
    { name: 'Node.js', icon: '/assets/nodejs.svg' },
    { name: 'Express.js', icon: '/assets/express.svg' },
    { name: 'JavaScript', icon: '/assets/js.svg' },
    { name: 'Prisma', icon: '/assets/prisma.svg' },
    { name: 'MySQL', icon: '/assets/mysql.svg' },
    { name: 'Tailwind', icon: '/assets/tailwind.svg' },
    { name: 'CSS', icon: '/assets/css.svg' },
    { name: 'HTML', icon: '/assets/html.svg' },
    { name: 'Git', icon: '/assets/git.svg' },
    { name: 'EJS', icon: '/assets/ejs.svg' },
  ];

  return (
    <section id='skills-loc' className="flex flex-col items-center justify-center p-5 md:p-12 lg:p-24">
      <h1 className="text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre">My Skills</h1>
      <div className="flex flex-wrap items-center justify-center w-full mt-12 gap-3">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="mt-5 h-[80vw] w-[80vw] sm:h-[40vw] sm:w-[40vw] md:h-[25vw] md:w-[25vw] lg:h-[20vw] lg:w-[20vw] bg-[#3d3e42] rounded-2xl flex flex-col overflow-hidden items-center justify-center gap-6 transition duration-500 hover:border-[#fec86a] hover:border-4 hover:bg-blend-color-burn"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-[30vw] w-[30vw] sm:h-[15vw] sm:w-[15vw] md:h-[10vw] md:w-[10vw] lg:h-[7.5vw] lg:w-[7.5vw] object-contain"
            />
            <h2 className="text-xl md:text-2xl font-normal text-[#fbfbfb]">{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;