import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className=" w-full h-auto relative ">
        <Link href="/">
          <img
            src="/body_image_grocery.jpg"
            alt="grocery"
            className="w-full h-full object-cover"
          />
        </Link>
        <div className=" absolute justify-start items-start inset-y-0 left-0 top-20 ">
          <h1 className="text-5xl font-bold text-left my-5 mx-20 ">
            Our Fresh Grocery Store
          </h1>
          <p className=" text-left text-xl my-5 mx-20">
            We provide fresh groceries for your daily needs at affordable
            <br />
            prices and high quality.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-14 mx-20">
            Shop Now
          </button>
        </div>
      </div>

      <div className=" max-w-screen-xl mx-auto my-5 grid grid-cols-3 gap-5">
        <div className="bg-lime-200 rounded-lg shadow-md h-full w-full col-span-1 ">
          <Link href="/">
            <img
              src="/grocery_image_1.jpeg"
              alt="grocery"
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="relative justify-center items-center bottom-[43rem]">
            <h4 className="text-xl font-bold text-center  ">
              We Supply 100% Fresh
            </h4>
            <h2 className="text-2xl font-bold text-center ">
              Organic Healthy Foods
            </h2>
            <button className="bg-transparent hover:bg-blue-700 text-black font-bold py-2 px-2 rounded mx-60">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-2 flex-row gap-5">
          <div className="bg-lime-200 rounded-lg shadow-md h-full w-full col-span-1 ">
            <Link href="/">
              <img
                src="/grocery_image_2.jpeg"
                alt="grocery"
                className="w-full h-full object-cover"
              />
            </Link>

            {/* <div className="relative justify-start items-start bottom-[43rem]">
              <h4 className="text-xl font-bold text-right  ">
                We Supply 100% Fresh
              </h4>
              <h2 className="text-2xl font-bold text-right ">
                Organic Healthy Foods
              </h2>
              <button className="bg-transparent hover:bg-blue-700 text-black font-bold py-2 px-2 rounded ">
                Shop Now
              </button>
            </div> */}
          </div>
          <div className="bg-lime-200 rounded-lg shadow-md h-full w-full col-span-1 ">
            <Link href="/">
              <img
                src="/grocery_image_3.jpg"
                alt="grocery"
                className="w-full h-full object-cover"
              />
            </Link>

            {/* <div className="relative justify-center items-center bottom-[43rem]">
              <h4 className="text-xl font-bold text-center  ">
                We Supply 100% Fresh
              </h4>
              <h2 className="text-2xl font-bold text-center ">
                Organic Healthy Foods
              </h2>
              <button className="bg-transparent hover:bg-blue-700 text-black font-bold py-2 px-2 rounded mx-60">
                Shop Now
              </button>
            </div> */}
          </div>
          <div className="bg-lime-200 rounded-lg shadow-md h-full w-full col-span-2">
            <Link href="/">
              <img
                src="/grocery_image_4.jpg"
                alt="grocery"
                className="w-full h-full object-cover"
              />
            </Link>

            {/* <div className="relative justify-center items-center bottom-[43rem]">
              <h4 className="text-xl font-bold text-center  ">
                We Supply 100% Fresh
              </h4>
              <h2 className="text-2xl font-bold text-center ">
                Organic Healthy Foods
              </h2>
              <button className="bg-transparent hover:bg-blue-700 text-black font-bold py-2 px-2 rounded mx-60">
                Shop Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
