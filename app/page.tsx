const Home = () => {
  return (
    <div>
      <h1 className="text-slate-950">Home</h1>
      <div className=" max-w-screen-xl  mx-auto my-3 grid grid-cols-3 gap-5 ">
        <div className="bg-lime-200 rounded-full shadow-md h-96 w-full col-span-2 hover:bg-teal-200">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            deleniti animi! Et libero maiores nemo unde omnis saepe laborum
            minus autem distinctio ullam, inventore rerum pariatur voluptatibus,
            illum veritatis quidem!
          </p> */}
        </div>
        <div className="grid grid-rows-5 gap-5">
          <div className="bg-lime-200 rounded-full shadow-md h-full w-full  hover:bg-teal-200"></div>
          <div className="bg-lime-200 rounded-full shadow-md h-full w-full  hover:bg-teal-200"></div>
          <div className="bg-lime-200 rounded-full shadow-md h-full w-full  hover:bg-teal-200"></div>
          <div className="bg-lime-200 rounded-full shadow-md h-full w-full  hover:bg-teal-200"></div>
          <div className="bg-lime-200 rounded-full shadow-md h-full w-full  hover:bg-teal-200"></div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="border border-black rounded-md p-2 active:bg-red-200 focus:bg-blue-200 hover:bg-green-200 mx-5 my-5 "
          placeholder="Enter your name"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-5 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
