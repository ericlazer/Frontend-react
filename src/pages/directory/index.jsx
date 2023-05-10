import React from "react";
import Layout from "../../components/Layout";
import XBox from "../../components/XBox";

const Ventures = [
  {
    name: "Coinbase",
    imgURL: "/img/directory/coinbase.png",
  },
  {
    name: "NGC Ventures",
    imgURL: "/img/directory/ngc.png",
  },
  {
    name: "AU21 Capital",
    imgURL: "/img/directory/au21.png",
  },
  {
    name: "Digital Currency Group",
    imgURL: "/img/directory/dcg.png",
  },
  {
    name: "Shima Capital",
    imgURL: "/img/directory/shima.png",
  },
  {
    name: "Animoca Brands",
    imgURL: "/img/directory/animoca.png",
  },
];

const Companies = [
  {
    name: "Megaton",
    imgURL: "/img/directory/megaton.png",
  },
  {
    name: "NGC Ventures",
    imgURL: "/img/directory/ngc.png",
  },
  {
    name: "Liberty Leaf",
    imgURL: "/img/directory/liberty.png",
  },
  {
    name: "XcekPay",
    imgURL: "/img/directory/xcel.png",
  },
  {
    name: "Coinbase",
    imgURL: "/img/directory/coinbase.png",
  },
  {
    name: "Animoca Brands",
    imgURL: "/img/directory/animoca.png",
  },
];

const Directory = () => {
  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <XBox isBackground={true} header="Reviews & Product" imageURL="/img/directory/product.png">

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
        <XBox isBackground={true} header="People" imageURL="/img/directory/people.png">
        </XBox>
      </div>
    </Layout>
  );
};

export default Directory;
