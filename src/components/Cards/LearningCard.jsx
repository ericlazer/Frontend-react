import React from "react";

const LearningCard = ({ status, header, content }) => {
  return (
    <div
      className="p-3 flex flex-col gap-3 w-[320px] rounded-lg"
      style={{
        backgroundImage:
          status === true
            ? "linear-gradient(151.79deg, #652FFF 9.63%, #FF3CB1 44.53%, #B250FE 91.35%)"
            : "linear-gradient(151.79deg, #474747 9.63%, #313131 44.53%, #1A1A1A 91.35%)",
      }}
    >
      {status === true ? (
        <img src="/img/Learning/learn.png" className="rounded-lg" alt="Learning" />
      ) : (
        <img src="/img/Learning/lockedLearn.png" className="rounded-lg" alt="Learning" />
      )}
      <div className="text-[22px] text-white">{header}</div>
      <div className="text-white">{content}</div>
    </div>
  );
};

export default LearningCard;
