import Landing from './landing';

const Header = () => {
  return (
    <header
      id='header-loc'
      className="h-screen p-8 md:p-24 bg-right bg-contain bg-no-repeat w-screen relative"
      style={{ backgroundImage: 'url(/assets/model_bw.png)' }}
    >
      <Landing />
    </header>
  );
};
export default Header;