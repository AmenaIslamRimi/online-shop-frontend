"use client";
import React, { useState } from "react";
import { VerticalCard } from "@/components/card/verticalCard";
import { ProductsType } from "@/types/productsType";

const Shop = () => {
  const [products, setProducts] = useState<ProductsType[]>([
    {
      name: "Avocado",
      price: 2.5,
      image: "/avocado.jpg",
      weight: ["5kg", "10kg"],
      quantity: 1,
    },
    {
      name: "Apple",
      price: 1.5,
      image: "/apple.jpg",
       weight: ["5kg", "10kg"],
      quantity: 1,
    },
    {
      name: "Banana",
      price: 1.5,
      image: "/banana.jpg",
       weight: ["5kg", "10kg"],
      quantity: 1,
    },
    {
      name: "Grapes",
      price: 2.5,
      image: "/grapes.jpg",
       weight: ["5kg", "10kg"],
      quantity: 1,
    },
    {
      name: "Orange",
      price: 1.5,
      image: "/orange.jpg",
       weight: ["5kg", "10kg"],
      quantity: 1,
    },
    {
      name: "Pineapple",
      price: 2.5,
      image: "/pineapple.jpg",
       weight: ["5kg", "10kg"],
      quantity: 1,
    },
    {
      name: "Strawberry",
      price: 1.5,
      image: "/strawberry.jpg",
       weight: ["5kg", "10kg"],
      quantity: 1,
    },
    {
      name: "Watermelon",
      price: 2.5,
      image: "/watermelon.jpg",
       weight: ["5kg", "10kg"],
      quantity: 1,
    },
  ]);
  
 
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
      <section className="max-w-screen-xl mx-auto grid grid-cols-4 gap-12 my-5">
        <div className="flex flex-col gap-10">
          <div className="  gap-5">
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

            <div className="grid md:grid-cols-2 md:gap-6 relative">
              <span className="absolute mt-2">$</span>
              <div className="relative z-0 w-full mb-5 group ml-3">
                <input
                  type="number"
                  name="number"
                  id="number"
                  min={0}
                  max={2250}
                  className="block py-2.5 px-0 w-32 text-sm text-gray-900 bg-transparent border border-gray-300 dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label className=" ml-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  From
                </label>
              </div>
              <span className="absolute mt-2 right-[7.6rem]">$</span>
              <div className="relative z-0 w-full mb-5 group ml-3">
                <input
                  type="number"
                  name="number"
                  id="number"
                  min={0}
                  max={2250}
                  className="block py-2.5 px-0 w-32 text-sm text-gray-900 bg-transparent border border-gray-300  dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label className=" ml-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  To
                </label>
              </div>
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

        <div className="col-span-3">
          <div className="max-w-screen-lg mx-auto w-auto border border-gray-300 bg-slate-50 rounded-md shadow my-5 py-2 pl-4 justify-between items-center flex">
            <div className="flex justify-start items-center gap-3">
              <button className=" ">
                <svg
                  viewBox="0 0 52 52"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14,16H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H14a2,2,0,0,1,2,2V14A2,2,0,0,1,14,16ZM4,12h8V4H4Z"></path>
                  <path d="M14,34H2a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2V32A2,2,0,0,1,14,34ZM4,30h8V22H4Z"></path>
                  <path d="M14,52H2a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2V50A2,2,0,0,1,14,52ZM4,48h8V40H4Z"></path>
                  <path d="M32, 16H20a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V14A2,2,0,0,1,32,16ZM22,12h8V4H22Z"></path>
                  <path d="M32, 34H20a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V32A2,2,0,0,1,32,34ZM22,30h8V22H22Z"></path>
                  <path d="M32, 52H20a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V50A2,2,0,0,1,32,52ZM22,48h8V40H22Z"></path>
                  <path d="M50, 16H38a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V14A2,2,0,0,1,50,16ZM40,12h8V4H40Z"></path>
                  <path d="M50, 34H38a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V32A2,2,0,0,1,50,34ZM40,30h8V22H40Z"></path>
                  <path d="M50, 52H38a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V50A2,2,0,0,1,50,52ZM40,48h8V40H40Z"></path>
                </svg>
              </button>
              <button>
                <svg
                  viewBox="0 0 16 16"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3, 1H1V3H3ZM3" />
                  <path d="M3, 13H1V15H3ZM3" />
                  <path d="M3, 7H1V9H3ZM3" />
                  <path d="M5, 1H15V3H5ZM5" />
                  <path d="M5, 13H15V15H5ZM5" />
                  <path d="M5, 7H15V9H5ZM5" />
                  <path d="M13, 1H11V3H13ZM13" />
                  <path d="M13, 13H11V15H13ZM13" />
                  <path d="M13, 7H11V9H13Z" />
                </svg>
              </button>
            </div>
            <div className="flex justify-end items-center ml-96">
              <h2 className="text-lg font-semibold">
                <span>8 Products</span>
              </h2>
            </div>
            <div className="flex justify-end items-center gap-2 mx-3">
              <span>
                <label>Sort By:</label>
              </span>
              <div>
                <select
                  name="sort"
                  id="sort"
                  className="w-40 border border-gray-300 rounded-md py-1 px-2"
                >
                  <option value="default">Best Product</option>
                  <option value="latest">Latest</option>
                  <option value="title-ascending">A-Z</option>
                  <option value="title-descending">Z-A</option>
                  <option value="price-ascending">Low to High</option>
                  <option value="price-descending">High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="max-w-screen-lg mx-auto w-auto rounded-md shadow my-5 justify-between items-center">
            <div className="grid grid-cols-3 gap-5">
              {products.map((item, index) => (
                <VerticalCard {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
