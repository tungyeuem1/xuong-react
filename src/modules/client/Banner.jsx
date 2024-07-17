import Button from "../../components/button/Button";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full rounded" src="/public/banner.png" alt="" />
        <div className="">
          <div className="absolute bottom-4 right-2">
            <img
              className="w-[600px]"
              src="/public/Illustration 2.png"
              alt=""
            />
          </div>
          <div className="absolute text-neutral-50 top-[20%] left-10 ">
            <h1 className="text-6xl font-semibold">The best online shop</h1>
            <p className="w-[600px] text-base ml-2 mt-7 mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
            <Button className="bg-whiteShoft text-primary">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
