import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PlanDetail = ({ content }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-4">
        <FontAwesomeIcon icon={faCheck} className="text-white w-3 px-[4px] py-[2px] border-2 border-white rounded-full" />
      </div>
      <p className="text-white text-[14px]">{content}</p>
    </div>
  );
};

const PlanButton = () => <div className='py-4 text-white rounded-md duration-300 transition cursor-pointer ease-in-out text-[14px] hover:opacity-[0.8] text-center' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #5C1693 0%, #201DAD 100%)'}}>Get Started</div>

const Plan = () => {
  return (
    <div className="mt-24">
      <p className="font-semibold text-4xl md:text-[56px] text-white ml-8 font-[DotBold]">
        Choose your Plan
      </p>
      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="p-3">
          <p className="text-[32px] text-white">Basic</p>
          <p className="text-[14px] text-gray-400">cancel anytime</p>
          <hr className="border-gray-400 mt-1" />
          <div className="flex flex-col gap-5 mt-4">
            <PlanDetail content="Curated news, social, & market feed" />
            <PlanDetail content="Personal asset watchlist" />
            <PlanDetail content="Daily crypto news and research right to your inbox" />
            <PlanDetail content="On-chain historical data" />
            <PlanDetail content="Advanced screening & charting" />
            <PlanDetail content="Tier 1 metrics up to 24 hours" />
            <PlanButton />
            <p className="text-gray-400 w-full text-center hover:text-white transition ease-in-out cursor-pointer mt-[-10px]">Learn more</p>
          </div>
        </div>

        <div className="p-3">
          <p className="text-[32px] text-white">Advanced</p>
          <p className="text-[14px] text-gray-400">cancel anytime</p>
          <hr className="border-gray-400 mt-1" />
          <div className="flex flex-col gap-5 mt-4">
            <PlanDetail content="Daily morning updates & analyst spotlights" />
            <PlanDetail content="On-chain, developer & social metrics" />
            <PlanDetail content="Protocol models & fund overviews" />
            <PlanDetail content="Derivatives historic value up to 1 month" />
            <PlanDetail content="Tier 1 metrics up to 1 hour, tier 2 metrics up to 24 hours" />
            <PlanDetail content="10 custom queries" />
            <PlanDetail content="25 smart alerts" />
            <PlanDetail content="CSV downloads" />
            {/* <PlanButton />
            <p className="text-gray-400 w-full text-center hover:text-white transition ease-in-out cursor-pointer mt-[-10px]">Learn more</p> */}
          </div>
        </div>

        <div className="p-3">
          <p className="text-[32px] text-white">Pro</p>
          <p className="text-[14px] text-gray-400">cancel anytime</p>
          <hr className="border-gray-400 mt-1" />
          <div className="flex flex-col gap-5 mt-4">
            <PlanDetail content="Governance updates & project alerts" />
            <PlanDetail content="Full research access, curated news, social, & market data" />
            <PlanDetail content="Transaction level granularity, monitor trader and holder behavior" />
            <PlanDetail content="Complete derivatives historic data" />
            <PlanDetail content="Tier 1, tier 2 and tier 3 metrics up to 10 mins" />
            <PlanDetail content="30 custom queries" />
            <PlanDetail content="50 smart alerts" />
            <PlanDetail content="10 active trading bots" />
            <PlanDetail content="CSV & JSON downloads" />
            <PlanDetail content="Trade on many exchanges using a single interface." />
            {/* <PlanButton />
            <p className="text-gray-400 w-full text-center hover:text-white transition ease-in-out cursor-pointer mt-[-10px]">Learn more</p> */}
          </div>
        </div>

        <div className="p-3">
          <p className="text-[32px] text-white">Expert</p>
          <p className="text-[14px] text-gray-400">cancel anytime</p>
          <hr className="border-gray-400 mt-1" />
          <div className="flex flex-col gap-5 mt-4">
            <PlanDetail content="Governance updates & project alerts" />
            <PlanDetail content="Full research access, curated news, social, & market data" />
            <PlanDetail content="Transaction level granularity, monitor trader and holder behavior" />
            <PlanDetail content="Complete derivatives historic data" />
            <PlanDetail content="Tier 1, tier 2 and tier 3 metrics up to 10 mins" />
            <PlanDetail content="30 custom queries" />
            <PlanDetail content="50 smart alerts" />
            <PlanDetail content="10 active trading bots" />
            <PlanDetail content="CSV & JSON downloads" />
            <PlanDetail content="Trade on many exchanges using a single interface." />
            {/* <PlanButton />
            <p className="text-gray-400 w-full text-center hover:text-white transition ease-in-out cursor-pointer mt-[-10px]">Learn more</p> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Plan;
