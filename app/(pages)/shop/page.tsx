"use client";
import React, { useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState();

  const getValues = (Event: any) => {
    console.log(Event.target.value);
    setProducts(Event.target.value);
  };
  return (
    <>
      <section className="max-w-screen-xl mx-auto w-auto  border-l-4 border-teal-100 bg-slate-50 rounded-md shadow my-5 py-3 pl-4 justify-start items-center flex">
        <h3 className=""> Home {">"}Fresh Fruits</h3>
      </section>
      <section className=" max-w-screen-xl mx-auto justify-center items-center flex py-4">
        <h1 className=" text-black text-3xl font-bold font-serif">
          All Fresh Fruits
        </h1>
      </section>
      <section className="max-w-screen-xl mx-auto grid grid-cols-4 gap-5 my-5">
        <div className="flex flex-col gap-5">
          <div className=" ">
            <div className="flex justify-between items-center">
              <span className="text-black text-base justify-start items-center">
                AVAILABILITY
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 justify-center items-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center my-2 ">
              <span>0 Selected</span>
              <span>Reset</span>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-gray-500">
                <input
                  type="checkbox"
                  name="availability"
                  id="availability"
                  className=""
                />{" "}
                In Stock
              </label>
              <label className="text-gray-500">
                <input type="checkbox" name="availability" id="availability" />{" "}
                Out of Stock
              </label>
            </div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <span className="text-black text-base justify-start items-center">
                PRICE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 justify-center items-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center my-2 ">
              <span>The highest price is $2,250.00</span>
              <span>Reset</span>
            </div>

            <div className="flex flex-col items-start">
              <label>${products}</label>
              <span>Price Range</span>
              <input
                type="range"
                name="price"
                id="price"
                min="0"
                max="2250"
                onChange={getValues}
              />
            </div>
          </div>

          <div className=" ">
            <div className="flex justify-between items-center">
              <span className="text-black ftext-base justify-start items-center">
                PRODUCT TYPE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 justify-center items-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center my-2 ">
              <span>0 Selected</span>
              <span>Reset</span>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-gray-500">
                <input type="checkbox" name="availability" id="availability" />{" "}
                Organic Fruits
              </label>
              <label className="text-gray-500">
                <input type="checkbox" name="availability" id="availability" />{" "}
                Summer Fruits
              </label>
              <label className="text-gray-500">
                <input type="checkbox" name="availability" id="availability" />{" "}
                Vegetables
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-3">product image</div>
      </section>
    </>
  );
};

export default Shop;
