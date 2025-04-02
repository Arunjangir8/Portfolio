// App.js
import React from 'react';


const App = () => {
  return React.createElement(
    'div',
    { className: 'bg-[#34353b] text-white font-roboto overflow-x-hidden' },
    React.createElement(Header, null),
    React.createElement(About, null),
    React.createElement(Skills, null),
    React.createElement(Projects, null),
    React.createElement(Education, null),
    React.createElement(Contact, null)
  );
};

// Header Component
const Header = () => {
  return React.createElement(
    'header',
    { 
      className: 'h-screen p-8 md:p-24 bg-right bg-contain bg-no-repeat w-screen relative',
      style: { backgroundImage: 'url(/assets/model_bw.png)' }
    },
    React.createElement(Navigation, null),
    React.createElement(Landing, null)
  );
};

// Navigation Component
const Navigation = () => {
  return React.createElement(
    'nav',
    { className: 'text-xl md:text-2xl flex flex-col md:flex-row justify-between items-center fixed w-[90%] z-50' },
    React.createElement(
      'ul',
      { className: 'flex flex-wrap justify-center' },
      React.createElement(
        'li',
        { className: 'list-none mx-2 md:mx-5' },
        React.createElement('a', { href: '#', className: 'text-[#fbfbfb] transition duration-500 hover:text-[#fbfbfb]' }, 'About')
      ),
      React.createElement(
        'li',
        { className: 'list-none mx-2 md:mx-5' },
        React.createElement('a', { href: '#portfolio-loc', className: 'text-[#98999a] transition duration-500 hover:text-[#fbfbfb]' }, 'Project')
      ),
      React.createElement(
        'li',
        { className: 'list-none mx-2 md:mx-5' },
        React.createElement('a', { href: '#education-loc', className: 'text-[#98999a] transition duration-500 hover:text-[#fbfbfb]' }, 'Education')
      ),
      React.createElement(
        'li',
        { className: 'list-none mx-2 md:mx-5' },
        React.createElement('a', { href: '#contact-loc', className: 'text-[#98999a] transition duration-500 hover:text-[#fbfbfb]' }, 'Contact')
      )
    ),
    React.createElement(
      'div',
      { className: 'h-12 w-full md:w-[300px] lg:w-[400px] bg-[#3d3e42] flex items-center justify-around p-1 rounded-lg mt-5 md:mt-0' },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Search',
        className: 'border-none bg-transparent w-[80%] text-[#fbfbfb] outline-none placeholder:text-[#98999a]'
      }),
      React.createElement('i', { className: 'ri-search-line text-[#98999a]' })
    )
  );
};

// Landing Component
const Landing = () => {
  return React.createElement(
    'div',
    { className: 'flex flex-col md:flex-row h-auto md:h-[90vh] bg-transparent items-center justify-between pt-36 md:pt-0 gap-8 md:gap-0' },
    React.createElement(
      'div',
      { className: 'flex flex-col intro' },
      React.createElement(
        'h3',
        { className: 'text-[#fbfbfb] font-normal text-2xl md:text-3xl lg:text-4xl text-center md:text-left md:ml-6' },
        "I'M ",
        React.createElement('span', { className: 'text-[#fec86a] font-semibold text-3xl md:text-4xl lg:text-5xl' }, 'Arun'),
        React.createElement('br', null),
        'Student At',
        React.createElement('br', null),
        'Newton School Of Technology'
      ),
      React.createElement(
        'a',
        { href: '#contact-loc' },
        React.createElement(
          'button',
          { className: 'h-12 w-36 mt-6 mx-auto md:ml-10 md:mr-0 bg-transparent border-2 border-[#fec86a] rounded-lg text-[#fec86a] text-base transition duration-500 hover:bg-[#fec86a] hover:text-[#34353b]' },
          'Contact Me'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'h-64 w-64 md:h-80 md:w-80 lg:h-[600px] lg:w-[600px] flex overflow-hidden rounded-full border-4 border-white' },
      React.createElement('img', { src: './assets/IMG_20241027_204358.jpg', alt: 'Profile', className: 'object-cover w-full h-full' })
    ),
    React.createElement(
      'div',
      { className: 'flex md:flex-col gap-2 items-center mt-5 md:mt-[50vh]' },
      React.createElement('div', { className: 'hidden md:block bg-[#fec86a] h-[15vh] w-[2.5px]' }),
      React.createElement(
        'a',
        { href: 'https://github.com/Arunjangir8' },
        React.createElement('i', { className: 'ri-github-line text-[#fbfbfb] text-3xl' })
      ),
      React.createElement(
        'a',
        { href: 'https://www.linkedin.com/in/arun-9406a4283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        React.createElement('i', { className: 'ri-linkedin-fill text-[#fbfbfb] text-3xl' })
      ),
      React.createElement(
        'a',
        { href: 'https://www.instagram.com/bejust_you/profilecard/?igsh=MXZiMXQ5M25mcWtzZA==' },
        React.createElement('i', { className: 'ri-instagram-fill text-[#fbfbfb] text-3xl' })
      )
    )
  );
};

// About Component
const About = () => {
  return React.createElement(
    'section',
    { className: 'min-h-[50vh] w-screen p-5 md:p-24' },
    React.createElement('h1', { className: 'text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre' }, 'About'),
    React.createElement(
      'div',
      { className: 'flex flex-col md:flex-row items-start gap-5 md:gap-0' },
      React.createElement('div', { className: 'h-0.5 w-full md:w-[400px] bg-[#fec86a] md:mr-8' }),
      React.createElement(
        'p',
        { className: 'text-[#fbfbfb] text-base md:text-xl' },
        "Hello! I`m Arun, a 1st-year B.Tech Computer Science student at Newton School of Technology. I completed my schooling at a Kendriya Vidyalaya SPG in Dwarka, New Delhi, where I developed a",
        React.createElement('span', { className: 'text-[#fec86a]' }, ' strong foundation in science and mathematics.'),
        React.createElement('br', null),
        React.createElement('br', null),
        "My passion for coding started early, and ",
        React.createElement('span', { className: 'text-[#fec86a]' }, "I've since honed my skills in HTML, CSS, and JavaScript."),
        " I enjoy creating web applications and exploring new technologies. I'm excited to continue my journey in tech, eager to learn and tackle new challenges. Thank you for visiting my portfolio!"
      )
    )
  );
};

// Skills Component
const Skills = () => {
  const skillsList = [
    { name: 'Python', icon: '/assets/python.svg' },
    { name: 'CSS', icon: '/assets/css.svg' },
    { name: 'HTML', icon: '/assets/html.svg' },
    { name: 'JavaScript', icon: '/assets/js.svg' },
    { name: 'Git', icon: '/assets/git.svg' },
    { name: 'Node.js', icon: '/assets/nodejs.svg' },
    { name: 'EJS', icon: '/assets/ejs.svg' },
    { name: 'Soon', icon: '/assets/react.svg' }
  ];

  return React.createElement(
    'section',
    { className: 'flex flex-col items-center justify-center p-5 md:p-12 lg:p-24' },
    React.createElement('h1', { className: 'text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre' }, 'My Skills'),
    React.createElement(
      'div',
      { className: 'flex flex-wrap items-center justify-center w-full mt-12 gap-3' },
      skillsList.map((skill, index) => 
        React.createElement(
          'div',
          { 
            key: index, 
            className: 'mt-5 h-[80vw] w-[80vw] sm:h-[40vw] sm:w-[40vw] md:h-[25vw] md:w-[25vw] lg:h-[20vw] lg:w-[20vw] bg-[#3d3e42] rounded-2xl flex flex-col overflow-hidden items-center justify-center gap-6 transition duration-500 hover:bg-[#fec86a]' 
          },
          React.createElement('img', { src: skill.icon, alt: skill.name, className: 'h-[30vw] w-[30vw] sm:h-[15vw] sm:w-[15vw] md:h-[10vw] md:w-[10vw] lg:h-[7.5vw] lg:w-[7.5vw] object-contain' }),
          React.createElement('h2', { className: 'text-xl md:text-2xl font-normal text-[#fbfbfb]' }, skill.name)
        )
      )
    )
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'DevBlog',
      image: '/assets/port.jpg',
      description: 'DevBlog is a modern and dynamic blogging platform designed to showcase engaging content. Built with JavaScript, HTML, and Node.js, it provides a seamless and user-friendly experience for both writers and readers. With a clean and responsive design, BlogSite allows users to share their thoughts, ideas, and insights effortlessly. Whether you\'re a tech enthusiast, lifestyle blogger, or industry expert, BlogSite is the perfect place to express yourself and connect with a wider audience.',
      link: 'https://github.com/Arunjangir8/DevBlog'
    },
    {
      title: 'Calculator',
      image: '/assets/cal.jpg',
      description: 'To create a calculator in your free time, begin by designing a simple user interface using Python. Then, implement the functionality with JavaScript to handle basic arithmetic operations like addition, subtraction, multiplication, and division based on user input.',
      link: 'https://arunjangir8.github.io/Calculator/'
    },
    {
      title: 'Crypto Bite',
      image: '/assets/crypto.jpg',
      description: 'A real-time cryptocurrency tracking application that provides live prices, detailed information, and rankings for the top 50 cryptocurrencies.',
      link: 'https://github.com/Arunjangir8/Crypto_Bite/'
    }
  ];

  return React.createElement(
    'section',
    { id: 'portfolio-loc', className: 'flex flex-col items-center justify-center p-5 md:p-12 lg:p-24' },
    React.createElement('h1', { className: 'text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre' }, 'Projects'),
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-[100px] ' },
      projects.map((project, index) => 
        React.createElement(
          'div',
          { key: index, className: 'border-3 border-[#fec86a] relative h-[80vw] w-[80vw] sm:h-[80vw] sm:w-[80vw] md:h-[45vw] md:w-[45vw] lg:h-[30vw] lg:w-[30vw] bg-[#3d3e42] rounded-2xl overflow-hidden ' },
          React.createElement('img', { src: project.image, alt: project.title, className: 'relative h-full w-full object-cover ' }),
          React.createElement(
            'div',
            { className: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 h-full w-full bg-[#34353ba2] items-center justify-center p-6 opacity-0 transition duration-500 hover:opacity-100' },
            React.createElement('h3', { className: 'text-[#fbfbfb] text-2xl' }, project.title),
            React.createElement('p', { className: 'text-[#fbfbfb] text-base text-center overflow-y-auto max-h-40' }, project.description),
            React.createElement(
              'a',
              { href: project.link },
              React.createElement(
                'button',
                { className: 'h-9 w-28 bg-[#fec86a] border border-[#fec86a] rounded-lg text-[#34353b] text-sm transition duration-500 cursor-pointer' },
                'See More'
              )
            )
          )
        )
      )
    )
  );
};

// Education Component
const Education = () => {
  return React.createElement(
    'section',
    { id: 'education-loc', className: 'flex flex-col w-screen relative items-center justify-center' },
    React.createElement('div', { className: 'bg-[#34353a] w-screen h-24' }),
    React.createElement('h1', { className: 'absolute text-[#fbfbfb] text-4xl md:text-5xl font-libre top-[10%] left-[15%] transform -translate-x-1/2 -translate-y-1/2' }, 'Education'),
    React.createElement(
      'div',
      { className: 'bg-[#3d3e42] w-screen p-5 md:p-10 flex flex-col gap-12 ' },
      React.createElement(
        'div',
        { className: 'relative h-auto w-[90vw] md:w-[70vw] lg:w-[50vw] md:ml-10 lg:ml-20 ' },
        React.createElement('h2', { className: 'text-[#fbfbfb] text-xl md:text-2xl lg:text-3xl font-normal relative before:content-[""] before:h-5 before:w-5 before:bg-[#fec86a] before:absolute before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:top-[7.5%] before:left-[-5%] before:rounded-full before:shadow-[0px_0px_20px_5px_#fec86a]' }, 'Student in Newton School Of Technology'),
        React.createElement(
          'div',
          { className: 'exp-desc relative before:content-[""] before:h-48 before:w-0.5 before:bg-[#fbfbfb] before:absolute before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:top-[55%] before:left-[-5%]' },
          React.createElement('h3', { className: 'text-[#fbfbfb] text-lg md:text-xl font-normal my-2' }, 'Sonipat, India'),
          React.createElement(
            'p',
            { className: 'text-[#fbfbfb] text-sm md:text-base font-normal' },
            'As a first-year student at the Newton School of Technology, I embarked on an exciting journey into the world of technology and computer science. The initial months were filled with learning, exploration, and personal growth, laying a solid foundation for my future studies.',
            React.createElement('br', null),
            React.createElement('br', null),
            'My first year introduced me to essential subjects such as programming fundamentals, web development, and introductory data structures. I learned the basics of languages like Python and HTML/CSS, which sparked my interest in coding and web design. The hands-on assignments allowed me to apply theoretical concepts and see immediate results, reinforcing my understanding.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'bg-[#3d3e42] w-screen p-5 md:p-10 flex flex-col gap-12' },
      React.createElement(
        'div',
        { className: 'relative h-auto w-[90vw] md:w-[70vw] lg:w-[50vw] md:ml-10 lg:ml-20' },
        React.createElement('h2', { className: 'text-[#fbfbfb] text-xl md:text-2xl lg:text-3xl font-normal relative before:content-[""] before:h-5 before:w-5 before:bg-[#fec86a] before:absolute before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:top-[7.5%] before:left-[-5%] before:rounded-full before:shadow-[0px_0px_20px_5px_#fec86a]' }, 'Studied in Kendriya Vidyalaya SPG'),
        React.createElement(
          'div',
          { className: 'exp-desc relative before:content-[""] before:h-48 before:w-0.5 before:bg-[#fbfbfb] before:absolute before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:top-[55%] before:left-[-5%]' },
          React.createElement('h3', { className: 'text-[#fbfbfb] text-lg md:text-xl font-normal my-2' }, 'New Delhi, India'),
          React.createElement(
            'p',
            { className: 'text-[#fbfbfb] text-sm md:text-base font-normal' },
            'Academically, I was challenged to think critically and explore various subjects. The emphasis on holistic learning helped me develop a strong foundation in both science and humanities. I learned to approach problems analytically, and the encouragement to participate in projects and presentations boosted my confidence.',
            React.createElement('br', null),
            React.createElement('br', null),
            'Kendriya Vidyalaya instilled in me strong values like respect, integrity, and perseverance. Interacting with classmates from diverse backgrounds enhanced my social skills and cultural awareness. I learned to appreciate different perspectives and fostered lasting friendships.'
          )
        )
      )
    )
  );
};

// Contact Component
const Contact = () => {
  return React.createElement(
    'section',
    { id: 'contact-loc', className: 'w-screen p-5 md:p-24 flex flex-col items-center justify-center' },
    React.createElement('h1', { className: 'text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre' }, 'Contact Me'),
    React.createElement(
      'div',
      { className: 'w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white shadow-lg mt-6' },
      React.createElement('img', { src: '/assets/IMG_20241027_204358.jpg', alt: 'Profile', className: 'w-full h-auto object-cover' })
    ),
    React.createElement(
      'div',
      { className: 'flex flex-col md:flex-row gap-6 mt-6' },
      React.createElement(
        'div',
        { className: 'bg-[#fec86a] p-2 rounded-lg flex gap-2' },
        React.createElement('i', { className: 'ri-message-3-line' }),
        React.createElement('p', null, 'arunjangir9987@gmail.com')
      ),
      React.createElement(
        'div',
        { className: 'bg-[#fec86a] p-2 rounded-lg flex gap-2' },
        React.createElement('i', { className: 'ri-phone-line' }),
        React.createElement('p', null, '742894XXXX')
      ),
      React.createElement(
        'div',
        { className: 'bg-[#fec86a] p-2 rounded-lg flex gap-2' },
        React.createElement('i', { className: 'ri-map-pin-3-line' }),
        React.createElement('p', null, 'Sonipat, India')
      )
    )
  );
};

export default App;