import NavBar from '../components/NavBar';
import landingImage from '../assets/landingImage.svg';
import bg1 from '../assets/bg.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="relative w-full h-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="relative flex flex-col justify-center items-center min-h-screen p-4">
          <div className="hero-content flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <div className="lg:w-1/2 ml-6">
              <h1 className="text-4xl font-extrabold text-white lg:text-7xl mb-4" style={{ textShadow: '1px 1px 1px #000' }}>
                Talk to strangers, Make friends!
              </h1>
              <p className="py-2 text-white text-lg lg:text-xl font-normal mb-6">
                Experience a random chat alternative to find friends, connect with people, and chat with strangers from all over the world!
              </p>
              <Link to="./chat" className="bg-[#4f45e4] text-white border-2 border-[#4f45e4] py-3 px-6 rounded-lg font-bold text-lg transition duration-300 ease-in-out transform hover:bg-[#5a53e2] hover:scale-110 hover:shadow-lg">
                Let's Chat
              </Link> 
            </div>
            <img
              src={landingImage}
              className="mt-10 lg:mt-0 lg:max-w-md w-full rounded-lg shadow-lg"
              alt="Landing Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;