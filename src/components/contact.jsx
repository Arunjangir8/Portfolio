// Contact Component
const Contact = () => {
  return (
    <section id="contact-loc" className="w-screen p-5 md:p-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#fbfbfb] font-libre">Contact Me</h1>
      <div className="w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white shadow-lg mt-6">
        <img src="/assets/IMG_20241027_204358.jpg" alt="Profile" className="w-full h-auto object-cover" />
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6 text-black">
        <div className="bg-[#fec86a] p-2 rounded-lg flex gap-2">
          <i className="ri-message-3-line" />
          <p>arunjangir9987@gmail.com</p>
        </div>
        <div className="bg-[#fec86a] p-2 rounded-lg flex gap-2">
          <i className="ri-phone-line" />
          <p>742894XXXX</p>
        </div>
        <div className="bg-[#fec86a] p-2 rounded-lg flex gap-2">
          <i className="ri-map-pin-3-line" />
          <p>Sonipat, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;