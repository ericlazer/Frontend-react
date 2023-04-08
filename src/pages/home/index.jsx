import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <div className="text-white text-xl">
          Your Pins
        </div>
        <div className="text-white px-5 py-3 cursor-pointer bg-[#212121] mr-10 rounded-lg transition hover:bg-gray-600">
          Manage Pins
        </div>
      </div>
    </Layout>
  );
};

export default Home;
