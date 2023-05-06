import React from "react";

const KnowMore = () => {
  return (
    <div className="mt-20">
      <div>
        <p className="text-4xl text-white font-[DotBold] md:text-6xl">Know more about</p>
        <p className="text-4xl text-white font-bold mt-4 font-[DotBold] md:text-6xl">daisugi</p>
      </div>
      <div className="mx-auto 2xl:mx-0 mt-16 text-center 2xl:ml-32 2xl:text-left w-full md:w-[600px] px-1 md:px-5 text-base">
        <span className="text-sm md:text-base text-white leading-7">
          Daisugi is a one-stop terminal that addresses the challenges of
          blockchain trading, providing investors with resources and tools to
          effectively manage and invest in a volatile cross-chain portfolio. It
          offers education, social sentiment analysis, news, insights, research,
          and the ability to trade on multiple exchanges from one single
          interface.
        </span>
      </div>
      <div className="mx-auto 2xl:mx-0 mt-16 text-center 2xl:ml-96 2xl:text-left w-full md:w-[700px] px-1 md:px-5">
        <span className="text-sm md:text-base text-white leading-7">
          Daisugi is the perfect solution for crypto investors looking to
          analyze the market and trade all in one place Developers have
          primarily focused on addressing problems within individual blockchain
          ecosystems, resulting in a lack of comprehensive resources for
          newcomers to unfamiliar platforms. This leaves individuals who are
          comfortable within a specific ecosystem, such as Ethereum or Polygon,
          reluctant to invest time in learning about new tools and unfamiliar
          platforms. This hinders the ability of users to expand their portfolio
          and make well-informed decisions. We want to enable a cross-chain
          ecosystem.
        </span>
      </div>
      <div className="mx-auto 2xl:mx-0 mt-16 text-center 2xl:ml-[800px] 2xl:text-left w-full md:w-[600px] px-1 md:px-5">
        <span className="text-sm md:text-base text-white leading-7">
          At Daisugi we recognize the need for increased transparency and
          accountability within the blockchain media industry. We implement
          strict standards for integrity and disclosure of potential conflicts
          of interest in the publications and analytical tools we provide.
          Additionally, we promote transparency in the investment and funding of
          media companies, enabling users to make more informed decisions.
        </span>
      </div>
    </div>
  );
};

export default KnowMore;
