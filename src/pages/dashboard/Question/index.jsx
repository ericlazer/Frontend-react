import React from "react";

const Question = () => {
  return (
    <div className="block lg:flex justify-between mt-32 px-0 md:px-24 items-center text-center lg:text-left">
      <div>
        <p className="text-lg xl:text-2xl font-semibold text-white">
          For your common question find <br /> the answer, Email us at <br />
          support@daisugi.com
        </p>
        <div className="flex gap-4 mt-6 items-center text-[14px] hover:opacity-[0.5] transition ease-in-out cursor-pointer text-white justify-center lg:justify-start">
          <p>Connect Support</p>
          <img src="/icon/LinkIcon.png" alt="Link Icon" className="w-3 h-3" />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-white w-full lg:w-[520px] mx-auto xl:mx-0 mt-12 text-sm md:text-xl font-medium">
        <p>What is crypto exchange ?</p>
        <p>
          How do i open an account on a daisugi ?
        </p>
        <p>
          What payment methods are available on daisugi ?
        </p>
        <p>
          Why i have to choose daisugi over other ?
        </p>
        <p>
          Type of trade i can do using daisugi ?
        </p>
      </div>
    </div>
  );
};

export default Question;
