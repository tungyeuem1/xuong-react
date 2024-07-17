/* eslint-disable react/prop-types */

const Heading = ({ children, className = "" }) => {
  return (
    <h2 className={`text-lg font-semibold text-text-1  ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
