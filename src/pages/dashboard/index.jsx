import React, { useEffect } from "react";
import Intro from "./Intro";
import KnowMore from "./KnowMore";
import Goal from "./Goal";
import Plan from "./Plan";
import Question from "./Question";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Dashboard = () => {
  useEffect(() => {
    document.body.classList.add("hide-scrollbar");

    return () => {
      document.body.classList.remove("hide-scrollbar");
    };
  }, []);

  return (
    <div className="hide-scrollbar min-h-screen bg-gradient-background">
      <div className="max-w-[1500px] m-auto pt-10 px-4 md:px-10">
        <Intro />
      </div>
      <div
        className="bg-no-repeat bg-cover"
      >
        <div className="max-w-[1500px] m-auto pt-10 px-4 md:px-10 pb-16">
          <KnowMore />
          <Goal />
          <Plan />
          <Question />
          <Subscribe />
        </div>
      </div>
      <div
        className="px-10 md:px-[100px] lg:px-[240px] bg-cover bg-no-repeat w-full bg-black"
        // style={{ backgroundImage: "url('/img/footer_image.jpg')" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
