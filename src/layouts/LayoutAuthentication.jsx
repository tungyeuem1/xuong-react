/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-[#F1F1F3]">
      <img
        className="absolute bottom-0 left-0 right-0 pointer-events-none isolate"
        src="public/ellipse.png"
        alt=""
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img
          className="inline-block mb-5 mb16"
          srcSet="public/logo.png 2x"
          alt="React-app"
        />
      </Link>
      <div className="w-full max-w-[556px] mx-auto rounded-xl px-5 py-8 lg:px-16 lg:py-12 bg-[#FCFCFD]  ">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuthentication;
