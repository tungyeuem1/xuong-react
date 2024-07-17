import Footer from "../modules/client/Footer";
import Header from "../modules/client/Header";

/* eslint-disable react/prop-types */
const LayoutClient = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen px-10 pt-10 bg-white">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutClient;
