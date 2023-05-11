import React from "react";
import Layout from "../../components/Layout";
import XBox from "../../components/XBox";
import PeopleBox from "../../components/PeopleBox";
import { Products, Ventures, Companies, People, Investments } from "./data";
import InvestListBox from "../../components/InvestListBox";

const Directory = () => {
  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <XBox isBackground={true} center={true} header="Reviews & Product">
          <div className="grid grid-cols-2 gap-3">
            {
              Products.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <img src={item.imgURL} alt={item.name} className="w-[60px] h-[60px] rounded-full" />
                  <div className="flex flex-col">
                    <p className="text-white text-[14px]">{item.name}</p>
                    <span className="text-white text-[12px] opacity-[0.5] leading-[20px]">{item.description}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </XBox>
        <XBox isBackground={true} header="Active VC" center={true}>
          <div className="grid grid-cols-3 gap-8">
            {Ventures.map((item, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={item.imgURL}
                  alt="Ventures"
                  className="rounded-full w-[80px] h-[80px] mx-auto"
                />
                <p className="text-[15px] text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </XBox>
        <XBox isBackground={true} header="Companies to watch" center={true}>
          <div className="grid grid-cols-3 gap-8">
            {Companies.map((item, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={item.imgURL}
                  alt="Companies"
                  className="rounded-full w-[80px] h-[80px] mx-auto"
                />
                <p className="text-[15px] text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </XBox>
        <XBox isBackground={true} center={true} header="People">
          <div className="grid grid-cols-2 gap-3">
            {
              People.map((item, index) => (
                <PeopleBox
                  key={index}
                  name={item.name}
                  imgURL={item.imgURL}
                  role={item.role}
                  company={item.company}
                  companyLogo={item.companyLogo}
                />
              ))
            }
          </div>
        </XBox>
        <XBox isBackground={true} header="Investments">
          {
            Investments.map((item, index) => (
              <InvestListBox
                key={index}
                name={item.name}
                round={item.round}
                price={item.amount}
                date={item.date}
              />
            ))
          }
        </XBox>
      </div>
    </Layout>
  );
};

export default Directory;
