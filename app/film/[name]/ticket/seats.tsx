import React from "react";
interface imageCount {
  count: any;
}

const SeatsGrid: React.FC<imageCount> = ({ count }) => {
  const svgCount = count;

  const svgs = [];
  const svgputih = [];

  for (let i = 0; i < svgCount; i++) {
    svgs.push(
      <div 
      key={i}
      className="bg shadow-lg mx-2 px-4 my-1 rounded-md flex items-center justify-center">
        <div key={i +1}>
          <p>{i + 1}</p>
        </div>
      </div>
    );
  }

  for (let i = 0; i < 20; i++) {
    svgputih.push(
      <div
      key={i}
      className="bg-gray-300 shadow-lg mx-2 px-4 my-1 rounded-md flex items-center justify-center">
        <div
          key={i}
        >
        <p>{i + 1}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full">
      <div className="absolute grid grid-cols-10 w-full h-full item-center justify-center">
        {svgputih}
      </div>
      <div className="absolute grid grid-cols-10 w-full h-full ">{svgs}</div>
    </div>
  );
};

export default SeatsGrid;
