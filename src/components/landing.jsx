// Landing Component
const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[90vh] bg-transparent items-center justify-between pt-36 md:pt-0 gap-8 md:gap-0">
      <div className="flex flex-col intro">
        <h3 className="text-[#fbfbfb] font-normal text-2xl md:text-3xl lg:text-5xl text-center md:text-left md:ml-6">
          I'M <span className="text-[#fec86a] font-semibold text-3xl md:text-4xl lg:text-8xl">Arun</span>
        </h3>
        <h4 className='text-[#fbfbfb] font-normal text-2xl md:text-3xl lg:text-5xl text-center md:text-left md:ml-6'>Student At</h4>
        <h4 className='text-[#fbfbfb] font-normal text-2xl md:text-3xl lg:text-5xl text-center md:text-left md:ml-6'>Newton School Of Technology</h4>
        <a href="#contact-loc">
          <button className="h-12 w-36 mt-6 mx-auto md:ml-10 md:mr-0 bg-transparent border-2 border-[#fec86a] rounded-lg text-[#fec86a] text-base transition duration-500 hover:bg-[#fec86a] hover:text-[#34353b]">
            Contact Me
          </button>
        </a>
      </div>
      <div className='flex gap-5'>
        <div className="h-64 w-64 md:h-80 md:w-80 lg:h-[600px] lg:w-[600px] flex overflow-hidden rounded-full border-4 border-white">
          <img src="./assets/profileimage.jpeg" alt="Profile" className="object-cover w-full h-full" />
        </div>
        <div className="flex md:flex-col gap-5 items-center mt-5 md:mt-[50vh]">
          <div className="hidden md:block bg-[#fec86a] h-[15vh] w-[2.5px]" />
          <a href="https://github.com/Arunjangir8">
            <img
              src="/assets/git.svg"
              alt="github"
              className="h-[40px] w-[40px] object-contain"
            />
          </a>
          <a href="https://www.linkedin.com/in/arun-9406a4283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img
              src="/assets/linkedin.svg"
              alt="github"
              className="h-[38px] w-[38px] object-contain"
            />
          </a>
          <a href="https://www.instagram.com/bejust_you/profilecard/?igsh=MXZiMXQ5M25mcWtzZA==">
            <img
              src="/assets/instagram.svg"
              alt="github"
              className="h-[40px] w-[40px] object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;