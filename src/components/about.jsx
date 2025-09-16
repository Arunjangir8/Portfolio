// About Component
const About = () => {
  return (
    <section id="about-loc"  className="min-h-[50vh] w-screen p-5 md:p-24 bg-[#3b3c3f]">
      <h1 className="text-4xl md:text-6xl font-bold text-[#fbfbfb] font-libre">About</h1>
      <div className="flex flex-col md:flex-row items-start gap-5 md:gap-0">
        <div className="h-0.5 w-full md:w-[400px] bg-[#fec86a] md:mr-8" />
        <p className="text-[#fbfbfb] text-base md:text-2xl">
          Hello! I'm Arun, a 2nd-year B.Tech Computer Science student at Newton School of Technology. I completed my schooling at a Kendriya Vidyalaya SPG in Dwarka, New Delhi, where I developed a
          <span className="text-[#fec86a] font-semibold"> strong foundation in science and mathematics.</span>
          <br />
          <br />
          My passion for coding started early, and
          <span className="text-[#fec86a] font-semibold"> I've since honed my skills in Node.js, Express, React, next,js.</span>
          {" "}I enjoy creating web applications and exploring new technologies. I'm excited to continue my journey in tech, eager to learn and tackle new challenges. Thank you for visiting my portfolio!
        </p>
      </div>
    </section>
  );
};

export default About;