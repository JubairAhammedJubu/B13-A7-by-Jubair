import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import logoXL from "../assets/logo-xl.png";

const Footer = () => {
  return (
    <div className="mx-auto w-full bg-[#244C3E] text-white px-4 sm:px-6 lg:px-0 ">
      <div className="max-w-277.5 mx-auto pt-12 sm:pt-20 pb-8">
        <div className="mx-auto text-center">
          
          <img
            src={logoXL}
            alt="KeenKeeper Logo"
            className="mx-auto h-9 sm:h-13 md:h-15 object-contain"
          />

          <p className="mt-4 text-sm sm:text-xl leading-5 sm:leading-8 text-white/80 px-2 sm:px-0">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          
          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-medium leading-7 mb-4">
              Social Links
            </h3>

            <div className="flex justify-center gap-3 sm:gap-4">
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <img src={instagramIcon} alt="Instagram" />
              </button>

              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <img src={facebookIcon} alt="Facebook" />
              </button>

              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <img src={twitterIcon} alt="Twitter" />
              </button>
            </div>
          </div>
        </div>

       
        <div className="py-7 sm:py-10">
          <hr className="border-white/7" />
        </div>

       
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-white/40 text-center md:text-left">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
