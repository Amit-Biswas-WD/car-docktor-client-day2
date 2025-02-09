import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const MeetOurTeam = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">Team</h2>
        <h2 className="text-5xl font-bold my-4">Meet Our Team</h2>
        <div className="flex justify-center items-center">
          <p className="text-base font-normal max-w-[717px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don,t look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div className="col-span-1 border border-gray-600 rounded-lg p-6">
          <img
            className="w-[344px] h-[293px] rounded-lg object-cover my-4"
            src="https://i.ibb.co.com/5W2nTLhb/1.jpg"
            alt="Car Doctor"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold my-3">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#FF3811]">
              Engine Expert
            </p>
            <div className="flex justify-center my-3 space-x-4 text-blue-500 text-2xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-700" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 border border-gray-600 rounded-lg p-6">
          <img
            className="w-[344px] h-[293px] rounded-lg object-cover my-4"
            src="https://i.ibb.co.com/5W2nTLhb/1.jpg"
            alt="Car Doctor"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold my-3">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#FF3811]">
              Engine Expert
            </p>
            <div className="flex justify-center my-3 space-x-4 text-blue-500 text-2xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-700" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 border border-gray-600 rounded-lg p-6">
          <img
            className="w-[344px] h-[293px] rounded-lg object-cover my-4"
            src="https://i.ibb.co.com/5W2nTLhb/1.jpg"
            alt="Car Doctor"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold my-3">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#FF3811]">
              Engine Expert
            </p>
            <div className="flex justify-center my-3 space-x-4 text-blue-500 text-2xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-700" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
