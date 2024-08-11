import bodyImg from "../../public/bodyimg.png";

const Body = () => {
  return (
    <>
      <div className="mx-[144px] flex gap-[49px]">
        <div>
          <img src={bodyImg} alt="" className="w-[442px]" />
        </div>
        <div className="my-[82.5px] w-[661px]">
          <h2 className="font-inter font-semibold text-[36px] leading-[44px] text-new">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="pt-[16px] pb-[32px] font-inter font-medium text-[14px] leading[20px] text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div>
            <button className="px-[32px] py-[14px] bg-text_clr font-inter font-medium text-[16px] leading-[24px] text-white rounded-[4px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=" px-[144px] bg-[#F5F7FA] flex justify-between">
        <div className="py-[84px]">
          <h2 className="font-inter font-semibold text-[36px] leading-[44px] text-new">
            Helping a local
            <span className="block text-text_clr">
              business reinvent itself
            </span>
          </h2>
          <p className="mt-[8px]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="my-[64px]">
          <div>
            <img src="" alt="" />
            <div>
              <p>2,245,341</p>
              <p>Members</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <p>46,328</p>
              <p>Clubs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
