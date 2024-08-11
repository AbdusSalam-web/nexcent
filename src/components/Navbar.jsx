import logo from "../../public/logo.png";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between py-[22px] items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className="flex gap-[50px] ">
              <li>
                <a
                  className="font-openSans text-[14px] leading-[24px] text-linkClr font-normal active:font-bold"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-openSans text-[14px] leading-[24px] text-linkClr font-normal active:font-bold"
                  href="#"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="font-openSans text-[14px] leading-[24px] text-linkClr font-normal active:font-bold"
                  href="#"
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  className="font-openSans text-[14px] leading-[24px] text-linkClr font-normal active:font-bold"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  className="font-openSans text-[14px] leading-[24px] text-linkClr font-normal active:font-bold"
                  href="#"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  className="font-openSans text-[14px] leading-[24px] text-linkClr font-normal active:font-bold"
                  href="#"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-[14px]">
              <li>
                <a
                  className="px-[20px] py-[10px] bg-white text-text_clr rounded-[6px] border-[1px] border-text_clr hover:bg-text_clr hover:text-white transition-all duration-500 font-inter font-medium text-[14px] leading-[20px]"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="px-[20px] py-[10px] bg-white text-text_clr rounded-[6px] border-[1px] border-text_clr hover:bg-text_clr hover:text-white transition-all duration-500 font-inter font-medium text-[14px] leading-[20px]"
                  href="#"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
