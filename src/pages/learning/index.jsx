import React, { useState } from "react";
import Layout from "../../components/Layout";
import LearningCard from "../../components/Cards/LearningCard";
import { LearnData } from "./data";

const Learning = () => {

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
