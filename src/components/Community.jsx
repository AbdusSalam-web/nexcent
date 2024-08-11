import com from "../../public/com.png";
import como from "../../public/como.png";
import comt from "../../public/comt.png";

const Community = () => {
  return (
    <div className=" my-[40px] mx-[53px]">
      <div>
        <h3 className="font-inter font-semibold text-[36px] leading-[44px] text-[#4D4D4D] text-center">
          Manage your entire community <br /> in a single system
        </h3>
        <p className="font-inter font-normal text-[16px] text-[#717171] leading-[24px] pt-[8px] text-center ">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex justify-between mt-[50px] ">
        <div className="w-[299px] flex flex-col items-center">
          <div className="px-[16px] flex flex-col items-center">
            <img src={com} alt="" className="mb-[16px]" />
            <h4  className="font-bold font-inter text-[28px] leading-[36px] text-new text-center">Membership Organisations</h4>
          </div>
          <p className="px-[24px] pt-[8px] pb-[24px] text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="w-[299px] flex flex-col items-center">
          <img src={com} alt="" className="mb-[16px]" />
          <h4  className="font-bold font-inter text-[28px] leading-[36px] text-new text-center">National Associations</h4>
          <p className="px-[24px] pt-[8px] pb-[24px] text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="w-[299px]  flex flex-col items-center">
          <img src={com} alt="" className="mb-[16px]" />
          <h4 className="font-bold font-inter text-[28px] leading-[36px] text-new text-center"> Clubs And Groups</h4>
          <p className="px-[24px] pt-[8px] pb-[24px] text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
