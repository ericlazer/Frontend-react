import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-gradient-card1 h-[300px] rounded-lg"></div>
        <div className="bg-gradient-card1 h-[300px] rounded-lg"></div>
        <div className="bg-gradient-card1 h-[300px] rounded-lg"></div>
        <div className="bg-gradient-card1 h-[300px] rounded-lg"></div>
        <div className="bg-gradient-card1 h-[300px] rounded-lg"></div>
        <div className="bg-gradient-card1 h-[300px] rounded-lg"></div>
      </div>
    </Layout>
  );
};

export default Home;