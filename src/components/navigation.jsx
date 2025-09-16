// Navigation Component
import smoothScrollTo from './animation.js';

const Navigation = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId, 1200);
  };
  return (
    <nav className="text-xl md:text-2xl flex flex-col md:flex-row justify-between items-center fixed w-[100%] z-50 p-12">
      <ul className="flex flex-wrap justify-center">
        <li className="list-none mx-2 md:mx-5">
          <a href="header-loc" onClick={(e)=>handleNavClick(e, 'header-loc')} className="text-[#fbfbfb] transition duration-500 hover:text-[#fbfbfb]">Home</a>
        </li>
        <li className="list-none mx-2 md:mx-5">
          <a href="about-loc" onClick={(e)=>handleNavClick(e, 'about-loc')} className="text-[#fbfbfb] transition duration-500 hover:text-[#fbfbfb]">About</a>
        </li>
        <li className="list-none mx-2 md:mx-5">
          <a href="#experience-loc" onClick={(e)=>handleNavClick(e, 'experience-loc')} className="text-[#98999a] transition duration-500 hover:text-[#fbfbfb]">Experience</a>
        </li>
        <li className="list-none mx-2 md:mx-5">
          <a href="#skills-loc" onClick={(e)=>handleNavClick(e, 'skills-loc')} className="text-[#98999a] transition duration-500 hover:text-[#fbfbfb]">Skills</a>
        </li>
        <li className="list-none mx-2 md:mx-5">
          <a href="#portfolio-loc" onClick={(e)=>handleNavClick(e, 'portfolio-loc')} className="text-[#98999a] transition duration-500 hover:text-[#fbfbfb]">Project</a>
        </li>
        <li className="list-none mx-2 md:mx-5">
          <a href="#education-loc" onClick={(e)=>handleNavClick(e, 'education-loc')} className="text-[#98999a] transition duration-500 hover:text-[#fbfbfb]">Education</a>
        </li>
        <li className="list-none mx-2 md:mx-5">
          <a href="#contact-loc" onClick={(e)=>handleNavClick(e, 'contact-loc')} className="text-[#98999a] transition duration-500 hover:text-[#fbfbfb]">Contact</a>
        </li>
      </ul>
      <div className="h-12 w-full md:w-[300px] lg:w-[400px] bg-[#3d3e42] flex items-center justify-around p-1 rounded-lg mt-5 md:mt-0">
        <input
          type="text"
          placeholder="Search"
          className="border-none bg-transparent w-[80%] text-[#fbfbfb] outline-none placeholder:text-[#98999a]"
        />
        <i className="ri-search-line text-[#98999a]" />
      </div>
    </nav>
  );
};

export default Navigation;