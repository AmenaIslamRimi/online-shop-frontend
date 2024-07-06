import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="w-full h-auto relative -z-10 -mt-8 bannar_image">
        <div className="background absolute justify-start items-start inset-y-0 left-0 top-20 "></div>

        <div className="content flex flex-col h-full justify-center ">
          <h1 className="text-5xl font-bold text-left my-5 mx-20 text-white">
            Our Fresh Grocery Store
          </h1>
          <p className=" text-left text-xl my-5 mx-20 text-white">
            We provide fresh groceries for your daily needs at affordable
            <br />
            prices and high quality.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-14 mx-20 w-fit">
            Shop Now
          </button>
        </div>
      </div>

      <div className=" max-w-screen-xl mx-auto my-5 grid grid-cols-3 gap-5">
        <div className="bg-lime-200 rounded-lg shadow-md h-full w-full col-span-1 ">
          <Link href="/">
            <Image
              src="/grocery_image_1.jpeg"
              alt="grocery"
              height={300}
              width={700}
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
        <div className="grid col-span-2 grid-cols-2 gap-5">
          <div className="bg-lime-200 rounded-lg shadow-md h-full w-full">
            <Link href="/">
              <Image
                src="/grocery_image_2.jpeg"
                alt="grocery"
                height={300}
                width={700}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="bg-lime-200 rounded-lg shadow-md h-full w-full col-span-1 ">
            <Link href="/">
              <Image
                src="/grocery_image_3.jpg"
                alt="grocery"
                height={300}
                width={700}
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
          <div className="bg-lime-200 rounded-lg col-span-2 shadow-md h-full w-full col-span-2">
            <Link href="/">
              <Image
                src="/grocery_image_4.jpg"
                alt="grocery"
                height={300}
                width={700}
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
