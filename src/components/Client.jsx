import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import logo3 from "../../public/logo3.png";
import logo4 from "../../public/logo4.png";
import logo5 from "../../public/logo5.png";
import logo6 from "../../public/logo6.png";
import logo7 from "../../public/logo7.png";
const Client = () => {
  return (
    <div>
      <div className=" my-[40px] mx-[53px]">
        <h3 className="font-inter font-semibold text-[36px] leading-[44px] text-[#4D4D4D] text-center">
          Our Clients
        </h3>
        <p className="font-inter font-normal text-[16px] text-[#717171] leading-[24px] pt-[8px] text-center ">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-between py-[25px] mt-[16px]">
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
          <img src={logo5} alt="logo" />
          <img src={logo6} alt="logo" />
          <img src={logo7} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Client;
