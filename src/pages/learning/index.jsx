import React, { useState } from "react";
import Layout from "../../components/Layout";
import LearningCard from "../../components/Cards/LearningCard";

const Learning = () => {
  // const [learnStep, setLearnStep] = useState(1);
  // const stepCount = 4;

  return (
    <Layout>
      <div className="flex gap-10 flex-wrap">
        <LearningCard
          status={true}
          header="Get Started | Crypto & NFT’s"
          content="Lorem ipsum dolor sit amet consectetur. Bibendum mattis ac eget in sit orci lorem nulla diam."
        />
        <LearningCard
          status={false}
          header="Get Started | Crypto & NFT’s"
          content="Lorem ipsum dolor sit amet consectetur. Bibendum mattis ac eget in sit orci lorem nulla diam."
        />
        <LearningCard
          status={false}
          header="Get Started | Crypto & NFT’s"
          content="Lorem ipsum dolor sit amet consectetur. Bibendum mattis ac eget in sit orci lorem nulla diam."
        />
        <LearningCard
          status={false}
          header="Get Started | Crypto & NFT’s"
          content="Lorem ipsum dolor sit amet consectetur. Bibendum mattis ac eget in sit orci lorem nulla diam."
        />
      </div>
    </Layout>
  );
};

export default Learning;
