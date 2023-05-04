import React, { useState } from "react";
import Layout from "../../components/Layout";
import LearningCard from "../../components/Cards/LearningCard";

const LearnData = [
  {
    status: true,
    imgURL: "/img/Learning/1.png",
    header: "Bitcoin Essentials",
    content: "Uncover Origins, Uses, and Future. Boost Digital Finance Expertise in Today's World.",
  },
  {
    status: false,
    imgURL: "/img/Learning/2.png",
    header: "Meme Coins Unveiled",
    content: "Explore Viral Coins, Their Importance, and Effects on the Blockchain Ecosystem.",
  },
  {
    status: false,
    imgURL: "/img/Learning/3.png",
    header: "Demystifying MEV",
    content: "Delve into Maximal Extractable Value, Blockchain Impact, and Effective Utilization Tactics.",
  },
  {
    status: false,
    imgURL: "/img/Learning/4.png",
    header: "Decoding DAOs",
    content: "Comprehensive Guide to Decentralized Organizations, Architecture, and Transformative Potential.",
  }
]

const Learning = () => {
  // const [learnStep, setLearnStep] = useState(1);
  // const stepCount = 4;

  return (
    <Layout>
      <div className="flex gap-10 flex-wrap justify-center">
        {
          LearnData.map((item, index) => {
            return (
              <LearningCard
                key={index}
                status={item.status}
                imgURL={item.imgURL}
                header={item.header}
                content={item.content}
              />
            )})
        }
      </div>
    </Layout>
  );
};

export default Learning;
