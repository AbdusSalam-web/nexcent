import heroImg from '../../public/hero_bg.png'

const Hero = () => {
  return (
    <section className=" bg-heroBgClr py-[96px] px-[75px]">
      <div className="container flex gap-[104px]">
        <div className="my-[65.5px] ">
          <h2 className="font-inter font-semibold text-[64px] leading-[76px]">
            Lessons and insights
            <span className="text-text_clr block">from 8 years</span>
          </h2>
          <p className="font-inter font-normal text-[16px] text-[#717171] leading-[24px] pt-[16px]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div>
            <button className="mt-[32px] bg-text_clr py-[14px] px-[32px] rounded-[4px] font-inter font-medium text-[16px] text-white hover:opacity-95">
              Register
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="Hero image" className="w-[391px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero