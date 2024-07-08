import React from "react";

export const VerticalCard = () => {
  return (
    <>
      <div>
        <div className="card border border-gray-400 ">
          <div className="card-image">
            <img src="/avocado.jpg" alt="avocado" />
          </div>
          <div className="card-content mx-3 my-3">
            <p>Fresh Avocado</p>
            <p className="font-bold text-2xl">$5.00</p>

            <div className="flex justify-start items-center box-border w-3 gap-2">
              <button className="flex border border-gray-400  mx-auto my-3 px-2 py-1 rounded-md items-center cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
                5kg
              </button>

              <button className="flex border border-gray-400  mx-auto my-3 px-2 py-1 rounded-md items-center cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
                10kg
              </button>
            </div>
            <div className="flex justify-between items-center gap-2 relative">
              <div className=" flex justify-start items-center border rounded-md border-black bg-white p-1 ">
                <input
                  type="number"
                  placeholder="Quantity"
                  step={1}
                  min={0}
                  className="w-20 h-8 text-center border-none focus:outline-none focus:border-none focus:ring-0 focus:ring-transparent"
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <button className="border border-black bg-blue-600 text-white hover:bg-slate-900 mx-3 p-2 rounded-sm">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
